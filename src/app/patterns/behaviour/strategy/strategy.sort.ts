import { IStrategy } from "./strategy.interface";

class SortStrategy implements IStrategy {
    public getListNumber(data: number[]): number[] {
        return data.sort();
    }
}

export default SortStrategy;
