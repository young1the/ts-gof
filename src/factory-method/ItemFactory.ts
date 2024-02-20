import Bow from "./Bow";
import Factory, { ItemName } from "./Factory";
import Item from "./Item";
import Sheid from "./Shied";
import Sword from "./Sword";

class ItemCount {
    private _currentCount = 0;
    constructor(private _maxCount: number) { }
    get maxCount() { return this._maxCount }
    isCreatable(): boolean {
        return this._currentCount < this.maxCount;
    }
    increaseCount(): void {
        if (this.isCreatable()) this._currentCount++;
    }
}

export default class ItemFactory extends Factory {
    private repository = new Map<ItemName, ItemCount>();

    constructor() {
        super();
        this.repository.set('sword', new ItemCount(5));
        this.repository.set('shield', new ItemCount(4));
        this.repository.set('bow', new ItemCount(3));
    }

    protected isCreatable(name: ItemName): boolean {
        const itemCount = this.repository.get(name);
        return itemCount?.isCreatable() ?? false;
    }
    protected createItem(name: ItemName): Item {
        return name === 'sword' ? new Sword()
        : name == 'shield' ? new Sheid()
        : name == 'bow' ? new Bow()
        : null!
    }
    protected postprocessItem(name: ItemName): void {
        const itemCount = this.repository.get(name);
        itemCount?.increaseCount();
    }

}