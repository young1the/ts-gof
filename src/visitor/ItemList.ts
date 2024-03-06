import Unit from "./Unit";
import Visitior from "./Visitior";

class ItemList implements Unit {
    items: Unit[] = [];
    add(item: Unit): void {
        this.items.push(item);
    }
    accept(visitor: Visitior): void {
        this.items.forEach(item => visitor.visit(item));
    }
}

export default ItemList;