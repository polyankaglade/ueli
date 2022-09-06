import { SearchResultItem } from "../../../common/SearchResult/SearchResultItem";
import { SearchResultItemIconType } from "../../../common/SearchResult/SearchResultItemIconType";
import { Searchable } from "../../Core/Searchable";
import { UeliCommandExecutor } from "../../Executors/UeliCommandExecutor";
import { UeliCommandEvent } from "../../UeliCommandEvent";

export class UeliCommand implements Searchable {
    private static Icon = `<svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 600" xml:space="preserve">
                                <path d="M59,121.6l81.3-46.9c5.9-3.4,13.1-3.4,18.9,0l80.8,46.9c5.8,3.4,9.4,9.6,9.4,16.4v187.2c0,14.6,15.8,23.7,28.4,16.4l62.4-36
                                    c5.9-3.4,9.5-9.6,9.5-16.4l0-209c0-6.8,3.6-13,9.5-16.4l81-46.8c5.9-3.4,13.1-3.4,18.9,0l81,46.8c5.9,3.4,9.5,9.6,9.5,16.4v324.4
                                    c0,6.8-3.6,13-9.5,16.4L259.2,583.1c-5.9,3.4-13.1,3.4-18.9,0L59,478.4c-5.9-3.4-9.5-9.6-9.5-16.4V137.9
                                    C49.6,131.2,53.2,124.9,59,121.6z"/>
                            </svg>`;

    public constructor(
        private readonly name: string,
        private readonly description: string,
        private readonly event: UeliCommandEvent
    ) {}

    public toSearchResultItem(): SearchResultItem {
        return {
            description: this.description,
            executionArgument: this.event,
            executorId: UeliCommandExecutor.executorId,
            icon: {
                icon: UeliCommand.Icon,
                type: SearchResultItemIconType.Svg,
            },
            locationOpenerId: "",
            name: this.name,
            openLocationArgument: "",
        };
    }
}