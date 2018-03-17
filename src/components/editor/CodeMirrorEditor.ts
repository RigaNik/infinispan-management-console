import {App} from "../../ManagementConsole";
import {CodeMirrorEditorCtrl} from "./CodeMirrorEditorCtrl";

export class CodeMirrorEditor {
  bindings: any;
  controller: any;
  controllerAs: string;
  templateUrl: string;

  constructor() {
    this.bindings = {
      editor: "=",
      mode: "=",
      readOnly: "=",
      lineNumbers: "="
    };
    this.controller = CodeMirrorEditorCtrl;
    this.controllerAs = 'ctrl';
    this.templateUrl = "components/editor/view/editor.html";
  }
}

const module: ng.IModule = App.module("managementConsole.components.editor", []);
module.component("editor", new CodeMirrorEditor());
