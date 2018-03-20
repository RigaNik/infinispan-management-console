import * as CodeMirror from "codemirror";
import IAugmentedJQuery = angular.IAugmentedJQuery;
import IDirective = angular.IDirective;
import IDirectiveFactory = angular.IDirectiveFactory;
import {EditorConfiguration} from "codemirror";

export class CodeMirrorEditor implements IDirective {
  templateUrl: string;
  editorConfig: EditorConfiguration;
  scope: Object;
  private editor: any;

  constructor() {
    this.templateUrl = "components/editor/view/editor.html";
    this.scope = {
      search: "="
    };
  }

  public static factory(): IDirectiveFactory {
    let directive: IDirectiveFactory = () => {
      return new CodeMirrorEditor();
    };
    return directive;
  }

  public link: Function = (scope, element: IAugmentedJQuery, attrs) => {
    this.editorConfig = <EditorConfiguration> {
      lineNumbers: attrs.lineNumbers,
      mode: {
        name: attrs.mode,
        json: true
      },
      readOnly: attrs.readOnly
    };

    this.editor = CodeMirror.fromTextArea(<HTMLTextAreaElement>element.find('textarea')[0], this.editorConfig);
    // @vblagoje ovde cemo da menjamo vrednost, verovatno na watch
    // this.editor.setValue(JSON.stringify(data, null, "\t"));
  };
}
