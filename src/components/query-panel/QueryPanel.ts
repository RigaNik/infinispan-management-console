import IDirectiveFactory = angular.IDirectiveFactory;
import IDirective = angular.IDirective;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import {RestService} from "../../services/rest/RestService";

export class QueryPanel implements IDirective{
  bindings: any;
  templateUrl: string;
  scope: Object;
  static $inject: string[] = ["restService"];

  constructor(private restService: RestService) {
    this.templateUrl = "components/query-panel/view/query-panel.html";
  }

  public static factory(): IDirectiveFactory {
    let directive: IDirectiveFactory = (restService: RestService) => {
      return new QueryPanel(restService);
    };
    return directive;
  }

  public link: IDirective = (scope, element: IAugmentedJQuery, attrs) => {
  };
}