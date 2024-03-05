import Builder from "./Builder";
import Data from "./Data";

class PlainTextBuilder extends Builder {
    constructor(data: Data) {
        super(data);
    }
    head(): string {
        return ""
    }
    body(): string {
        return `Name: ${this.data.getName()}\nAge: ${this.data.getAge()}\n`
    }
    foot(): string {
        return ""
    }

}

export default PlainTextBuilder;    