import CoolAircon from "./CoolAircon";
import Door from "./Door";
import HeatBoiler from "./HeatBoiler";
import Window from "./Window";
import {Mediator, Participant} from "./Mediator";

export default class SmartHome implements Mediator {

    door = new Door(this);
    window = new Window(this);
    aircon = new CoolAircon(this);
    boiler = new HeatBoiler(this);

    participantChanged(participant: Participant): void {
        if (participant instanceof Door && !participant.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant instanceof Window && !participant.isClosed()) {
            this.aircon.off();
            this.boiler.off();            
        }
        if (participant instanceof CoolAircon && !participant.isOff()) {
            this.door.close();
            this.window.close();
        }
        if (participant instanceof HeatBoiler && !participant.isOff()) {
            this.door.close();
            this.window.close();
        }
    }
}