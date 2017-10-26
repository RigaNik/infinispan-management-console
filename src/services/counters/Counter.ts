import {ICounter} from "./ICounter";
import {isNotNullOrUndefined, deepGet} from "../../common/utils/Utils";


export class Counter implements ICounter {

  constructor(private type: string, private name: string, private storage: string,
              private initialValue: number, private currentValue: number, private bounds: string) {
  }

  getType(): string {
    return this.type;
  }

  getStorage(): string {
    return this.storage;
  }

  getInitialValue(): number {
    return this.initialValue;
  }

  getCurrentValue(): number {
    return this.currentValue;
  }

  getBounds(): string {
    return this.bounds;
  }

  getName(): string {
    return this.name;
  }

}
