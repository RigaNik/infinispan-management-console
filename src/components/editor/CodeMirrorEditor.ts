import * as CodeMirror from "codemirror";
import {IScope} from "../../common/IScopeService";
import IAugmentedJQuery = angular.IAugmentedJQuery;
import IDirective = angular.IDirective;
import IDirectiveFactory = angular.IDirectiveFactory;
import {EditorConfiguration} from "codemirror";

export class CodeMirrorEditor implements IDirective {
  controller: any;
  controllerAs: string;
  templateUrl: string;
  restrict = 'E';
  editorConfig: EditorConfiguration;
  editor: any;


  constructor() {
    this.templateUrl = "components/editor/view/editor.html";
  }

  public static factory(): IDirectiveFactory {
    let directive: IDirectiveFactory = () => {
      return new CodeMirrorEditor();
    };
    return directive;
  }

  public link: Function = (scope: IScope, element: IAugmentedJQuery, attrs) => {
    this.editorConfig = <EditorConfiguration> {
      lineNumbers: attrs.lineNumbers,
      mode: {
        name: attrs.mode,
        json: true
      },
      readOnly: attrs.readOnly
    };

    this.editor = CodeMirror.fromTextArea(<HTMLTextAreaElement>element.find('textarea')[0], this.editorConfig);
  };
}
