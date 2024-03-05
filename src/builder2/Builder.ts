import Data from "./Data";

abstract class Builder {
    constructor(protected data: Data) {}

    abstract head(): string;
    abstract body(): string;
    abstract foot(): string;
}

export default Builder;