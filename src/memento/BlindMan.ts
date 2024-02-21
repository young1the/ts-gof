import Memento from "./Memonto";

export enum Action {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT,
}
export default class BlindMan {
    private actions: Action[] = [];

    constructor(
        private curX: number, private curY: number,
        private tarX: number, private tarY: number,
    ) { }

    walk(action: Action): number {
        this.actions.push(action)
        if (action === Action.UP) this.curY += 1;
        if (action === Action.DOWN) this.curY -= 1;
        if (action === Action.LEFT) this.curX -= 1;
        if (action === Action.RIGHT) this.curX += 1;
        return this._getDistance();
    }

    _getDistance(): number {
        return Math.sqrt(Math.pow(this.curX - this.tarX, 2) + Math.pow(this.curY - this.tarY, 2))
    }

    createMemento(): Memento {
        const memento = new Memento(this.curX, this.curY, this.actions)
        return memento;
    }
    restoreMemento(memento: Memento): void {
        this.curX = memento.x
        this.curY = memento.y
        this.actions = structuredClone(memento.actions)
    }

    resultPath(): void {
        const result = this.actions.reduce<any>((prev: string, action) => { return prev + "->" + action }, 1)
        console.log(result);
    }
}