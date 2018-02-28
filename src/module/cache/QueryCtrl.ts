import {ICacheContainer} from "../../services/container/ICacheContainer";
import {ICache} from "../../services/cache/ICache";
import {CacheService} from "../../services/cache/CacheService";
import {IStateService} from "angular-ui-router";
import {RestService} from "../../services/rest/RestService";

export class QueryCtrl {
  static $inject: string[] = ["$state", "cacheService", "container", "cache", "allCacheStats", "$http", "restService"];

  private editor: CodeMirror.Editor;

  constructor(private $state: IStateService, private cacheService: CacheService, private container: ICacheContainer,
              private cache: ICache, private allCacheStats: any[], private $http: ng.IHttpService, private restService: RestService) {
  }

  currentCacheAvailability(): boolean {
    return this.container.available;
  }

  currentClusterAvailabilityAsString(): string {
    return this.container.available ? "AVAILABLE" : "N/A";
  }

  resetStats(): void {
    this.cacheService.resetStats(this.container, this.cache).finally(() => {
      this.refresh();
    });
  }

  loadQuery(): void {
    let queryString: string = angular.element(document.querySelector("#query-editor")).val();
    this.restService.executeCacheQuery(this.cache.name, queryString).then((response: any) => {
      this.editor.setValue(JSON.stringify(response.data, null, "\t"));
    }).catch((error: any) => {
      this.editor.setValue(JSON.stringify(error, null, "\t"));
    });
  }

  refresh(): void {
    this.$state.reload();
  }
}
