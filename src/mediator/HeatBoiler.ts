import {Mediator, Participant} from "./Mediator";


export default class HeatBoiler extends Participant {
    private bOff = true;
    constructor(mediator: Mediator) {super(mediator)}

    on():void{
        if(!this.bOff) return ;
        this.bOff = false;
        this.mediator.participantChanged(this);
        console.log(`Boiler is ${this.bOff}`)
    }
    off():void{
        if(this.bOff) return ;
        this.bOff = true;
        this.mediator.participantChanged(this);
        console.log(`Boiler is ${this.bOff}`)

    }

    isOff():boolean{
        return this.bOff
    }

    displayState(): void {
        console.log(`Boiler is ${this.bOff}`)
    }

}