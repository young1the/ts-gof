import {Mediator, Participant} from "./Mediator";

export default class Door extends Participant {
    private bClosed = true;
    constructor(mediator: Mediator) {super(mediator)}

    open():void{
        if(!this.bClosed) return ;
        this.bClosed = false;
        this.mediator.participantChanged(this);
        console.log(`Door is ${this.bClosed}`)

    }
    close():void{
        if(this.bClosed) return ;
        this.bClosed = true;
        this.mediator.participantChanged(this);
        console.log(`Door is ${this.bClosed}`)

    }

    isClosed():boolean{
        return this.bClosed
    }


    displayState(): void {
        console.log(`Door is ${this.bClosed}`)
    }

}