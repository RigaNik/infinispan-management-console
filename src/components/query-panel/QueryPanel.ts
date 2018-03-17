import {App} from "../../ManagementConsole";
import {QueryPanelCtrl} from "./QueryPanelCtrl";

export class QueryPanel {

    bindings: any;
    controller: any;
    templateUrl: string;
    controllerAs: string;

    constructor() {
        this.bindings = {
            cacheName: "="
        };
        this.controller = QueryPanelCtrl;
        this.controllerAs = "ctrl";
        this.templateUrl = "components/query-panel/view/query-panel.html";
    }
}

const module: ng.IModule = App.module("managementConsole.components.query-panel", []);
module.component("queryPanel", new QueryPanel());
