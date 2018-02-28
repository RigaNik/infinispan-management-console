import CodeMirror = require("codemirror");
import EditorFromTextArea = CodeMirror.EditorFromTextArea;
import EditorConfiguration = CodeMirror.EditorConfiguration;
import {EditorConfiguration} from "codemirror";

export class CodeMirrorEditorCtrl implements ng.IComponentController {
  editor: EditorFromTextArea;
  mode: string = "javascript";
  readOnly: boolean;
  lineNumbers: boolean;

  constructor() {
    let editorConfig: EditorConfiguration = <EditorConfiguration> {
      lineNumbers: this.lineNumbers,
      mode:  {
        name: this.mode,
        json: true
      },
      readOnly: this.readOnly
    };
    this.editor = CodeMirror.fromTextArea(<HTMLTextAreaElement>document.getElementById("editor"), editorConfig);
  }
}
