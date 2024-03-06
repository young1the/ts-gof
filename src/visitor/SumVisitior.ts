import Item from "./Item";
import ItemList from "./ItemList";
import Visitior from "./Visitior";

class SumVisitior implements Visitior {
    sum = 0;
    visit(item: Item): void {
        if (item instanceof Item) {
            this.sum += item.price;
        }
        if (item instanceof ItemList) {
            item.accept(this);
        }
    }
    getValue(): number {
        return this.sum;
    }
}

export default SumVisitior;