import Prototype from "./Prototype";
import Shape from "./Shape";

export default class Group implements Prototype<Group>, Shape<Group> {
    shapes: Array<Shape<any>|Prototype<any>> = [];
    constructor() { }
    draw(): Group {
        return this;
    }
    add(shape: Shape<any>): Group {
        this.shapes.push(shape);
        return this;
    }
    moveOffset(dx: number, dy: number): Group {
        this.shapes.forEach(s => (s as Shape<any>).moveOffset(dx, dy));
        return this;
    }
    copy(): Group {
        const result = new Group();
        this.shapes.forEach(s => this.add((s as Shape<any>)));
        return result;
    }
}