
export interface ICounter {
  getName(): string;
  getType(): string;
  getStorage(): string;
  getInitialValue(): number;
  getCurrentValue(): number;
  getLowerBound(): number;
  getUpperBound(): number;
  isStrong(): boolean
}
