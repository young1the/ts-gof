export default class Item {

    constructor(private _name: string, private _cost: number) { }

    /*  
        private _name: string;
        private _cost: number;
    
        constructor(name: string, cost: number) {
            this._name = name;
            this._cost = cost;
        }
    */

    get name() { return this._name }
    get cost() { return this._cost }
}
