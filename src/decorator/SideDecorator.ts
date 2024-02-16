import Decorator from "./Decorator";
import Item from "./Item";

export default class SideDecorator extends Decorator {
    constructor(targetItem: Item, private ch: string) { super(targetItem) }
    getLinesCount(): number {
        return this.targetItem.getLinesCount();
    }

    getLength(i: number): number {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    }

    getMaxLength(): number {
        return this. targetItem.getMaxLength() + this.ch.length * 2;
    }

    getString(i: number): string {
        return `${this.ch}${this.targetItem.getString(i)}${this.ch}`
    }
}