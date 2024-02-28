import Point from "./Point";
import Prototype from "./Prototype";
import Shape from "./Shape";

export default class Line implements Prototype<Line>, Shape<Line> {
    constructor(public point1: Point, public point2: Point) { }
    draw(): Line {
        return this;
    }
    moveOffset(dx: number, dy: number): Line {
        this.point1.moveOffset(dx, dy);
        this.point2.moveOffset(dx, dy);
        return this;
    }
    setPoint1(point: Point): Line {
        this.point1 = point.copy();
        return this;
    }
    setPoint2(point: Point): Line {
        this.point2 = point.copy();
        return this;
    }
    copy(): Line {
        const result = new Line(this.point1.copy(), this.point2.copy());
        return result;
    }

}