import Prototype from "./Prototype";
import Shape from "./Shape";

export default class Point implements Prototype<Point>, Shape<Point> {
    constructor(public x: number, public y: number) { }
    draw(): Point {
        return this;
    }
    moveOffset(dx: number, dy: number): Point {
        this.x += dx;
        this.y += dy;
        return this;
    }
    copy(): Point {
        const result = new Point(this.x, this.y);
        return result;
    }

}

