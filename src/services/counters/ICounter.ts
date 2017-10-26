
export interface ICounter {
  getName(): string;
  getType(): string;
  getStorage(): string;
  getInitialValue(): number;
  getCurrentValue(): number;
  getBounds(): string;
}
