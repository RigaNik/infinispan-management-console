import {ICacheContainer} from "../../../services/container/ICacheContainer";
import {IRootScopeService} from "../../../common/IRootScopeService";
import IModalService = angular.ui.bootstrap.IModalService;
import {ICounter} from "../../../services/counters/ICounter";
import {CounterCreateModalCtrl} from "./CounterCreateModalCtrl";
import {CacheService} from "../../../services/cache/CacheService";
import {CounterService} from "../../../services/counters/CounterService";

export class CountersCtrl {
  static $inject: string[] = ["$rootScope", "$uibModal", "container", "counterService", "counters"];

  constructor(private $rootScope: IRootScopeService,
              private $uibModal: IModalService,
              private container: ICacheContainer,
              private counterService: CounterService,
              private counters: ICounter []) {

  }

  createCounterModal(): void {
    this.$uibModal.open({
      templateUrl: "module/cache-container/counters/view/counters-create.html",
      controller: CounterCreateModalCtrl,
      controllerAs: "modalCtrl",
      resolve: {
        container: (): ICacheContainer => this.container,
        counterService: (): CacheService => this.counterService
      }
    });
  }

  reset(counter: ICounter): void {
    this.counterService.reset(counter);
  }

  remove(counter: ICounter): void {
    this.counterService.remove(counter);
  }
}
