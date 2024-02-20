import Unit from "./Unit";
import File from "./File";

export default class Folder extends Unit {
    private units: Unit[] = [];
    constructor(name: string) { super(name) }
    getSize(): number {
        return this.units.reduce((acc, ele) => acc + ele.getSize(), 0);
    }
    add(unit: Unit) {
        this.units.push(unit);
    }
    print() {
        super.print();
        console.group(this.getName());
        for (const unit of this.units) {
            unit.print();
        }
        console.groupEnd();
    }
}