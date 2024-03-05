import Builder from "./Builder";
import Data from "./Data";

class JSONBuilder extends Builder {
    constructor(data: Data) {
        super(data);
    }
    head() {
        return "{\n"
    }
    body() {
        return `  "name": "${this.data.getName()}",\n  "age": ${this.data.getAge()}\n`
    }
    foot() {
        return "}\n"
    }
}

export default JSONBuilder;