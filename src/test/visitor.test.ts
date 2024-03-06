import { describe, test, expect } from "@jest/globals";
import ItemList from "../visitor/ItemList";
import Item from "../visitor/Item";
import SumVisitior from "../visitor/SumVisitior";
import AvgVisitor from "../visitor/AvgVisitor";

describe("25. Visitor", () => {
    const list1 = new ItemList();
    list1.add(new Item(100));
    list1.add(new Item(200));
    list1.add(new Item(300));

    const list2 = new ItemList();
    list2.add(new Item(400));
    list2.add(new Item(500));
    list1.add(list2);

    const list3 = new ItemList();
    list3.add(new Item(600));
    list3.add(new Item(700));
    list2.add(list3);

  test("should work", () => {
    const sumVisitor = new SumVisitior();
    list1.accept(sumVisitor);
    expect(sumVisitor.getValue()).toBe(2800);

    const avgVisitor = new AvgVisitor();
    list1.accept(avgVisitor);
    expect(avgVisitor.getValue()).toBe(400);
  });
});