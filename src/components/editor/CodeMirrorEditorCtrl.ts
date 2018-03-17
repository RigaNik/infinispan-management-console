import * as CodeMirror from "codemirror";
import EditorConfiguration = CodeMirror.EditorConfiguration;

export class CodeMirrorEditorCtrl implements ng.IComponentController {
  static $inject = ['$scope'];
  editor: any;
  editorConfig: EditorConfiguration;
  mode: string = "javascript";
  readOnly: boolean;
  lineNumbers: boolean;

  constructor() {
    this.editorConfig = <EditorConfiguration> {
      lineNumbers: this.lineNumbers,
      mode:  {
        name: this.mode,
        json: true
      },
      readOnly: this.readOnly
    };
  }

  $postLink(): void {
    this.editor = CodeMirror.fromTextArea(<HTMLTextAreaElement>document.getElementById('editor'), this.editorConfig);
  };

}
