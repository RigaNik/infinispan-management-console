import {CodeMirrorEditor} from "../editor/CodeMirrorEditor";
import IDirectiveFactory = angular.IDirectiveFactory;
import IDirective = angular.IDirective;
import {IScope} from "../../common/IScopeService";
import IAugmentedJQuery = angular.IAugmentedJQuery;
import {RestService} from "../../services/rest/RestService";
import * as CodeMirror from "codemirror";
import IDirectivePrePost = angular.IDirectivePrePost;

export class QueryPanel implements IDirective{
  bindings: any;
  controller: any;
  templateUrl: string;
  controllerAs: string;
  private editor: CodeMirror.Editor;
  static $inject: string[] = ["restService"];
  statusCode: number;

  constructor(private restService: RestService) {
    this.templateUrl = "components/query-panel/view/query-panel.html";
  }

  public static factory(): IDirectiveFactory {
    let directive: IDirectiveFactory = (restService: RestService) => {
      return new QueryPanel(restService);
    };
    return directive;
  }

  public link: IDirectivePrePost = {
    post: (scope, element: IAugmentedJQuery, attrs) => {
      element.find(".execute").on("click", () => {
        const queryString: string = element.find(".search-query-textarea")[0].value;
        console.log(queryString);
        this.restService.executeCacheQuery(attrs.cacheName, queryString).then((response: any) => {
          scope.statusCode = 200; // todo @vlaboje ovde prosledi response code
          console.log(response);
        }).catch((error: any) => {
          scope.statusCode = 500; // todo @vblagoje ovde prosledi sta treba
          console.log(error);
        });
      })
    }
  };

    // this.restService.executeCacheQuery(this.cacheName, queryString).then((response: any) => {
        // this.statusCode = 200; // @todo @vblagoje prosledi status code
        // this.editor.setValue(JSON.stringify(response.data, null, "\t"));
    // }).catch((error: any) => {
        // this.statusCode = 401; // @todo @vblagoje prosledi status code
        // this.editor.setValue(JSON.stringify(error, null, "\t"));
    // });
}