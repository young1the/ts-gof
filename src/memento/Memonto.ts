import { Action } from "./BlindMan";

export default class Memento {
    public actions: Action[] = []
    getActions() {return this.actions}
    getX(){return this.x}
    getY(){return this.y}
    constructor(public x: number, public y: number, actions: Action[]) {
        actions.forEach(action=>this.actions.push(action));
    }

}