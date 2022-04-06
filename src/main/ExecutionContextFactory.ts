import { App } from "electron";
import { ExecutionContext } from "./ExecutionContext";

export class ExecutionContextFactory {
    public static fromElectronApp(electronApp: App): ExecutionContext {
        return new ExecutionContext(
            electronApp.getPath("exe"),
            electronApp.getPath("temp"),
            electronApp.getPath("userData"),
            electronApp.getPath("home")
        );
    }

    public static fromDummy({
        executablePath = "",
        temporaryDirectoryPath = "",
        userDataPath = "",
        userHomePath = "",
    } = {}): ExecutionContext {
        return new ExecutionContext(executablePath, temporaryDirectoryPath, userDataPath, userHomePath);
    }
}