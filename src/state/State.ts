import Player from "./Player";

export abstract class State {
    constructor(protected player: Player) { }
    abstract standUp(): void;
    abstract walk(): void;
    abstract run(): void;

    abstract getDescription(): string;
}

class WalkState extends State {
    constructor(player: Player) { super(player); }
    standUp(): void {
        this.player.talk("Walk -> StandUp");
        this.player.setState(new StandUpState(this.player));
        this.player.setSpeed(0);
    }
    walk(): void {
        this.player.talk("I'm already walking");
    }
    run(): void {
        this.player.talk("Walk -> Run");
        this.player.setState(new RunState(this.player));
        this.player.setSpeed(this.player.getSpeed() + 10);
    }
    getDescription(): string {
        return "Walk";
    }
}

export class StandUpState extends State {
    standUp(): void {
        this.player.talk("I'm already standing up");
    }
    walk(): void {
        this.player.talk("StandUp -> Walk");
        this.player.setState(new WalkState(this.player));
        this.player.setSpeed(5);
    }
    run(): void {
        this.player.talk("StandUp -> Run");
        this.player.setState(new RunState(this.player));
        this.player.setSpeed(10);
    }
    getDescription(): string {
        return "StandUp";
    }
    constructor(player: Player) {
        super(player);
    }
}

export class RunState extends State {
    constructor(player: Player) { super(player); }
    standUp(): void {
        this.player.talk("Run -> StandUp");
        this.player.setState(new StandUpState(this.player));
        this.player.setSpeed(0);
    }
    walk(): void {
        this.player.talk("Run -> Walk");
        this.player.setState(new WalkState(this.player));
        this.player.setSpeed(5);
    }
    run(): void {
        this.player.talk("I'm already running");
    }
    getDescription(): string {
        return "Run";
    }

}
