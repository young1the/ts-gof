import CustomIterator from "./CustomIterator";
import CustomArray from "./CustomArray";
import Item from "./Item";

export default class ArrayIterator implements CustomIterator<Item> {

    private index: number;

    constructor(private array: CustomArray) {
        this.index = -1;
     }

    next(): boolean {
        return ++this.index < this.array.count;
    }
    current(): Item {
        return this.array.getItem(this.index);
    }

}
