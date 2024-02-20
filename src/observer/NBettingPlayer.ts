import Player from "./Player";

export default class NBettingPlayer extends Player {
    constructor(name: string, private n: number[]) { super(name) }
    update(diceNumber: number): void {
        this.winning = this.n.includes(diceNumber)
    }
}