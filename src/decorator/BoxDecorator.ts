import Decorator from "./Decorator";
import Item from "./Item";

export default class BoxDecorator extends Decorator {
    constructor(targetItem: Item) {super(targetItem)}
    getLinesCount(): number {
        return this.targetItem.getLinesCount()
    }
    getLength(i: number): number {
        return this.targetItem.getMaxLength() + 2; 
    }
    getMaxLength(): number {
        return this.targetItem.getMaxLength() + 2; 
    }
    getString(i: number): string {
        return `|${this.targetItem.getString(i).padEnd(this.targetItem.getMaxLength()," ")}|`
    }
    
}