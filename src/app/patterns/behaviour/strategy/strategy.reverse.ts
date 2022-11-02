import { IStrategy } from "./strategy.interface";

class ReverseStrategy implements IStrategy {
    public getListNumber(data: number[]): number[] {
        return data.reverse();
    }
}

export default ReverseStrategy;
