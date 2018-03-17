import {RestService} from "../../services/rest/RestService";
import * as CodeMirror from "codemirror";

export class QueryPanelCtrl implements ng.IComponentController {
    static $inject: string[] = ["restService"];

    cacheName: any;
    statusCode: number;
    private editor: CodeMirror.Editor;

    constructor(private restService: RestService) {
    }

    loadQuery(): void {
        let queryString: string = angular.element(document.querySelector("#query-editor")).val();
        this.restService.executeCacheQuery(this.cacheName, queryString).then((response: any) => {
            this.statusCode = 200; // @todo @vblagoje prosledi status code
            this.editor.setValue(JSON.stringify(response.data, null, "\t"));
        }).catch((error: any) => {
            this.statusCode = 401; // @todo @vblagoje prosledi status code
            this.editor.setValue(JSON.stringify(error, null, "\t"));
        });
    }

}
