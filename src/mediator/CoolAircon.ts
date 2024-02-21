import {Mediator, Participant} from "./Mediator";

export default class CoolAircon extends Participant {
    private bOff = true;
    constructor(mediator: Mediator) {super(mediator)}

    on():void{
        if(!this.bOff) return ;
        this.bOff = false;
        this.mediator.participantChanged(this);
    }
    off():void{
        if(this.bOff) return ;
        this.bOff = true;
        this.mediator.participantChanged(this);
    }

    isOff():boolean{
        return this.bOff
    }

    displayState(): void {
        console.log(`Aircon is ${this.bOff}`)
    }

}