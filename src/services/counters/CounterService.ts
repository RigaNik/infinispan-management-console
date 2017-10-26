import {App} from "../../ManagementConsole";
import {DmrService} from "../dmr/DmrService";
import {ICounter} from "./ICounter";
import {Counter} from "./Counter";
import {IDmrRequest} from "../dmr/IDmrRequest";
import {SocketBindingService} from "../socket-binding/SocketBindingService";
import IQService = angular.IQService;
import {LaunchTypeService} from "../launchtype/LaunchTypeService";
import {isNotNullOrUndefined, traverse, deepValue} from "../../common/utils/Utils";
import {ICacheContainer} from "../container/ICacheContainer";
import {CompositeOpBuilder} from "../dmr/CompositeOpBuilder";
import {IDmrCompositeReq} from "../dmr/IDmrCompositeReq";

const module: ng.IModule = App.module("managementConsole.services.counter", []);

export class CounterService {
  static $inject: string[] = ["$q", "dmrService", "socketBindingService", "launchType"];

  constructor(private $q: IQService, private dmrService: DmrService,
              private socketBindingService: SocketBindingService, private launchType: LaunchTypeService) {
  }

  createCounter(type: string, name: string, storage: string): ICounter {
    return new Counter(type, name, storage, 0, 5, "[0,10]");
  }

  getAllCounters(cacheContainer: ICacheContainer): ng.IPromise<ICounter[]> {
    let deferred: ng.IDeferred<any> = this.$q.defer();
    let counters: ICounter [] = [this.createCounter("strong", "a-counter", "volatile"),this.createCounter("weak", "b-counter", "volatile")];
    deferred.resolve(counters);
    return deferred.promise;
  }

  update(counter: ICounter): ng.IPromise<any> {
    return this.save(counter, ["socket-binding", "is-new-node"]);
  }

  create(counter: ICounter): ng.IPromise<any> {
    // mark new node
    //endpoint.getDMR()["is-new-node"] = true;
    //return this.save(counter, ["is-new-node"]);
    return null;
  }

  reset(counter: ICounter): ng.IPromise<any> {
    console.log("reset " + counter);
    return this.dmrService.executePost({
      operation: "",
      address: []
    });
  }

  remove(counter: ICounter): ng.IPromise<any> {
    console.log("remove " + counter);
    return this.dmrService.executePost({
      operation: "",
      address: []
    });
  }

  save(counter: ICounter, excludedAttributes: string []): ng.IPromise<any> {
    let builder: CompositeOpBuilder = new CompositeOpBuilder();
    //let root: any = endpoint.getDMR();
    let root: any = null;
    let dmrAddress: string [] = this.getCounterAddress(counter);
    this.dmrService.traverseDMRTree(builder, root, dmrAddress, excludedAttributes);
    let req: IDmrCompositeReq  = builder.build();
    req.steps = req.steps.reverse();
    return this.dmrService.executePost(req);
  }

  private getEndpointsRootAddress(profile: string): string[] {
    let endpointPath: string[] = ["subsystem", "datagrid-infinispan-endpoint"];
    return this.launchType.getProfilePath(profile).concat(endpointPath);
  }

  private getCounterAddress(e: ICounter): string[] {
    let ePath: string[] = ["subsystem", "datagrid-infinispan-endpoint"];
    //return this.launchType.getProfilePath(e.getProfileName()).concat(ePath).concat(e.getType()).concat(e.getName());
    return null;
  }
}

module.service("counterService", CounterService);
