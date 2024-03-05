import Car from "./Car";

class CarBuilder {
    private _maker: string = ""
    private _model: string = ""
    private _year: number = 0
    private _color: string = ""
    public constructor() {
    }
    public build(): Car {
        if (this._maker === "" || this._model === "" || this._year === 0 || this._color === "") { return null! }
        return new Car(this._maker, this._model, this._year, this._color);
    }
    public maker(maker: string): CarBuilder {
        this._maker = maker;
        return this;
    }
    public model(model: string): CarBuilder {
        this._model = model;
        return this;
    }
    public year(year: number): CarBuilder {
        this._year = year;
        return this;
    }
    public color(color: string): CarBuilder {
        this._color = color;
        return this;
    }
}

export default CarBuilder;