export default abstract class Player {
    protected winning: boolean = false
    constructor(private name: string) { }

    getName() { return this.name }
    getWinning() { return this.winning }

    abstract update(diceNumber: number):void;
}