import { describe, test, expect } from "@jest/globals";
import Car from "../builder/Car";
import CarBuilder from "../builder/CarBuilder";

describe("20. Builder (1/2)", () => {
    const car = new Car("Toyota", "Corolla", 2020, "Red");
    const car2 = new CarBuilder().color("Red").maker("Toyota").model("Corolla").year(2020).build();

    test("Builder Test", () => {
        console.log(car2.printDetails());
        expect(car).toEqual(car2);
    })
})