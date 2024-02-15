import SumStrategy from "./Sumstrategy";

export default function sumPrint(strategy: SumStrategy, n: number): number {
    return strategy.get(n);
}