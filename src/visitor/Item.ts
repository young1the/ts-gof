import Unit from "./Unit";
import Visitior from "./Visitior";

class Item implements Unit {
    constructor(public price: number) {}

    accept(visitor: Visitior): void {
        visitor.visit(this);
    }
}

export default Item;