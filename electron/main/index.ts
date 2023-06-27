import { app, BrowserWindow, ipcMain, IpcMainEvent, nativeTheme } from "electron";
import { join } from "path";

const getPreloadScriptFilePath = (appIsPackaged: boolean) =>
    appIsPackaged
        ? join(__dirname, "..", "..", "dist-electron", "preload", "index.js")
        : join(__dirname, "..", "preload", "index.js");

const loadFileOrUrl = (browserWindow: BrowserWindow, appIsPackaged: boolean) => {
    appIsPackaged
        ? browserWindow.loadFile(join(__dirname, "..", "..", "dist", "index.html"))
        : browserWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
};

const createBrowserWindow = (appIsPackaged: boolean): BrowserWindow => {
    return new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            preload: getPreloadScriptFilePath(appIsPackaged),
        },
        vibrancy: "window",
        backgroundMaterial: "auto",
        frame: false,
    });
};

const registerIpcEventListeners = () => {
    ipcMain.on(
        "themeShouldUseDarkColors",
        (event: IpcMainEvent) => (event.returnValue = nativeTheme.shouldUseDarkColors),
    );
};

const registerNativeThemeEventListeners = (browserWindow: BrowserWindow) => {
    nativeTheme.addListener("updated", () => browserWindow.webContents.send("nativeThemeChanged"));
};

(async () => {
    await app.whenReady();
    const browserWindow = createBrowserWindow(app.isPackaged);
    loadFileOrUrl(browserWindow, app.isPackaged);
    registerIpcEventListeners();
    registerNativeThemeEventListeners(browserWindow);
})();