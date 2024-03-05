import { State, StandUpState } from "./State";

class Player {
    private speed: number;
    private state: State;
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed: number) {
        this.speed = speed;
    }
    constructor() {
        this.speed = 0;
        this.state = new StandUpState(this)
    }
    setState(state: State) {
        this.state = state;
    }
    getState(): State { return this.state; }

    talk(msg: string) {
        console.log(msg);
    }

}

export default Player;
