import { test, expect, describe } from "@jest/globals";
import { GaussSumStrategy, LoopSumStrategy, sumPrint } from "../strategy";

describe('2. Strategy 패턴', () => {
    test('gauss합과 loop합이 같다.', () => {
        const gauss = new GaussSumStrategy();
        const loop = new LoopSumStrategy();
        expect(sumPrint(gauss, 10)).toBe(sumPrint(loop, 10));
    })
})