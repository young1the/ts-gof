import Item from "./Item";
import ItemList from "./ItemList";
import Visitior from "./Visitior";

class AvgVisitor implements Visitior {
    sum = 0;
    count = 0;
    visit(item: Item): void {
        if (item instanceof Item) {
            this.sum += item.price;
            this.count++;
        }
        if (item instanceof ItemList) {
            item.accept(this);
        }
    }

    getValue(): number {     
        return this.sum / this.count;
    }
}

export default AvgVisitor;