import Unit from "./Unit";

interface Visitior {
    visit(unit: Unit): void;
}

export default Visitior;