import Animal from "./Animal";

export default class Cat extends Animal {
    constructor(name: string) { super(name) }
    sound(): void {
        console.log("야옹");
    }
}