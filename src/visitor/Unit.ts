import Visitior from "./Visitior";

interface Unit {
    accept(visitor: Visitior): void;
}

export default Unit;