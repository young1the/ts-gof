import { CustomArray, Item } from "../iterator";
import { describe, test, expect } from '@jest/globals'

describe('1. Iterator', () => {
    const items = [
        new Item("쿠크다스", 2500),
        new Item("새우깡", 1200),
    ];
    const array = new CustomArray(items);

    test('Array 생성 테스트', () => {
        expect(array).toBeDefined();
    });

    test('Iterator 테스트', () => {
        const iterator = array.iterator();
        expect(iterator.next()).toBe(true);
        expect(iterator.current().name).toBe("쿠크다스");
        expect(iterator.current().cost).toBe(2500);
        expect(iterator.next()).toBe(true);
        expect(iterator.current().name).toBe("새우깡");
        expect(iterator.current().cost).toBe(1200);
        expect(iterator.next()).toBe(false);
    });
});