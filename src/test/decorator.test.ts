import { describe, test } from "@jest/globals";
import Strings from "../decorator/Strings";
import SideDecorator from "../decorator/SideDecorator";
import BoxDecorator from "../decorator/BoxDecorator";

describe("8. Decorator", () => {
    const strs = new Strings();
    strs.add("hello!")
    strs.add("hello! World")
    strs.add("world!")
    test("Decorator Test", () => {
        const sideDecorator = new SideDecorator(strs, `"`);
        const boxDecorator = new BoxDecorator(strs);
        sideDecorator.print()
        console.log(boxDecorator.getMaxLength())
        boxDecorator.print();
        const boxSideDecorator = new BoxDecorator(sideDecorator);
        boxSideDecorator.print();
    })
})