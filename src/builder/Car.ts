class Car {
    constructor(
        private maker: string,
        private model: string,
        private year: number,
        private color: string,
    ) {
    }

    public printDetails(): void {
        console.log(`Maker: ${this.maker}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
}

export default Car;