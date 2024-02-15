import CustomIterator from "./CustomIterator";
import CustomArray from "./CustomArray";

export default class ArrayIterator implements CustomIterator<Item> {

    private index: number;

    constructor(private array: CustomArray) {
        this.index = -1;
     }

    next(): boolean {
        return ++this.index < this.array.count;
    }
    current(): Item {
        throw this.array.getItem(this.index);
    }

}
