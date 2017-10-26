import {ICacheContainer} from "../../../services/container/ICacheContainer";
import {isNotNullOrUndefined, isNonEmptyString} from "../../../common/utils/Utils";
import {ICounter} from "../../../services/counters/ICounter";
import {Counter} from "../../../services/counters/Counter";
import {CounterService} from "../../../services/counters/CounterService";
export class CounterCreateModalCtrl {

  static $inject: string[] = ["container", "counterService"];

  errorExecuting: boolean = false;
  errorDescription: string = "";
  successfulOperation: boolean = false;
  counter: ICounter = new Counter(null, null, null, null, null, null);

  constructor(private container: ICacheContainer, private counterService: CounterService) {

  }

  createCounter() {
    console.log("Create counter "+ this.counter.getName());

    this.counterService.create(this.counter);
  }

  getCounterTypes(): string [] {
    return ["weak", "strong"];
  }

  getStorageTypes(): string [] {
    return ["volatile", "persistent"];
  }

}
