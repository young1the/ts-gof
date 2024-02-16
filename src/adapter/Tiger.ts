export default class Tiger {
    constructor(private name: string) { }
    public getName() { return this.name }
    public setName(name: string) { this.name = name }

    public roar(): string {
        return "으르렁"
    }
}