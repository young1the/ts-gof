import Player from "./Player";

export default class OddBettingPlayer extends Player {
    constructor(name:string){super(name)}

    update(diceNumber: number): void {
        this.winning = diceNumber % 2 === 1;
    }
    
}