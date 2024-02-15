import ArrayIterator from './ArrayIterator'
import Aggregator from './Aggregator';
import Item from './Item';
import CustomIterator from './CustomIterator';

export default class CustomArray implements Aggregator<Item> {

    constructor(private items: Item[]) { }

    public getItem(index: number) {
        return this.items[index]
    }

    public get count() {
        return this.items.length
    }

    iterator(): CustomIterator<Item> {
        return new ArrayIterator(this);
    }
}