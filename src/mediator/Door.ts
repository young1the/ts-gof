import {Mediator, Participant} from "./Mediator";

export default class Door extends Participant {
    private bClosed = true;
    constructor(mediator: Mediator) {super(mediator)}

    open():void{
        if(!this.bClosed) return ;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    }
    close():void{
        if(this.bClosed) return ;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    }

    isClosed():boolean{
        return this.bClosed
    }


    displayState(): void {
        console.log(`Door is ${this.bClosed}`)
    }

}