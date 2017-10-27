import {ICounter} from "./ICounter";
import {isNotNullOrUndefined, deepGet} from "../../common/utils/Utils";


export class Counter implements ICounter {

  public static STRONG_TYPE: string = "STRONG";
  public static WEAK_TYPE: string = "WEAK";

  constructor(private type: string, private name: string, private storage: string,
              private initialValue: number, private currentValue: number, private lowerBound: number, private upperBound: number) {
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

  getLowerBound(): number {
    return this.lowerBound;
  }

  getUpperBound(): number {
    return this.upperBound;
  }

  getName(): string {
    return this.name;
  }

  isStrong(): boolean {
    return this.type === Counter.STRONG_TYPE;
  }

}
