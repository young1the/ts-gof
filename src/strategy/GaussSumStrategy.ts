import SumStrategy from "./Sumstrategy";

export default class GaussSumStrategy implements SumStrategy {
    get(n: number): number {
        return (n * (n + 1)) / 2
    }
}