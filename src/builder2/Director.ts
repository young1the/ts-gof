import Builder from "./Builder";

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    build(): String {
        const head = this.builder.head();
        const body = this.builder.body();
        const foot = this.builder.foot();
        return `${head}${body}${foot}`
    }

}   

export default Director;