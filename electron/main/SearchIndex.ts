import { SearchResultItem } from "@common/SearchResultItem";

export class SearchIndex {
    private static readonly SCAN_DURATION_IN_MS = 5000;

    private searchResultItems: SearchResultItem[];

    public constructor(private readonly onSearchIndexUpdated: () => void) {
        this.searchResultItems = [];
    }

    public getSearchResultItems(): SearchResultItem[] {
        return this.searchResultItems;
    }

    public async scan(): Promise<void> {
        await this.wait(SearchIndex.SCAN_DURATION_IN_MS);

        this.searchResultItems = [
            { id: "1", description: "/Applications/Adobe Photoshop.app", name: "Adobe Photoshop" },
            { id: "2", description: "/Applications/Visual Studio Code.app", name: "Visual Studio Code" },
            { id: "3", description: "/Applications/Whatsapp.app", name: "Whatsapp" },
            { id: "4", description: "/Applications/1Password.app", name: "1Password" },
            { id: "5", description: "/Applications/Calculator.app", name: "Calculator" },
            { id: "6", description: "/Applications/Chess.app", name: "Chess" },
            { id: "7", description: "/Applications/ClickUp.app", name: "ClickUp" },
            { id: "8", description: "/Applications/Docker.app", name: "Docker" },
            { id: "9", description: "/Applications/FaceTime.app", name: "FaceTime" },
            { id: "10", description: "/Applications/Fellow.app", name: "Fellow" },
        ];

        this.onSearchIndexUpdated();
    }

    private wait(millisecondsToWait: number): Promise<void> {
        return new Promise((resolve) => setTimeout(() => resolve(), millisecondsToWait));
    }
}