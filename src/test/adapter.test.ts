import { describe, test, expect, jest } from "@jest/globals";
import { Animal, Cat, Dog, TigerAdapter } from "../adapter";

describe("3. Adapter", () => {
    const animals = Array<Animal>();
    animals.push(new Dog("댕이"))
    animals.push(new Cat("냥이"))

    const consoleSpy = jest.spyOn(console, 'log');
    test("Animal Class Test", ()=>{
        animals.forEach(animal=>animal.sound());
        expect(consoleSpy).toHaveBeenCalledWith("멍멍")
        expect(consoleSpy).toHaveBeenCalledWith("야옹")
    })
    
    test("Tiger Adapter", ()=> {
        const tigerAdapter = new TigerAdapter("큰냥이");
        tigerAdapter.sound();
        expect(consoleSpy).toHaveBeenCalledWith("으르렁")
    })
})