import Player from "./Player";

export default abstract class DiceGame {
    protected players: Player[] = []

    addPlayer(player: Player) : void {
        this.players.push(player);
    }

    abstract play():number;
}