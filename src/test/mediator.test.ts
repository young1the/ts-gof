import { describe, expect, test } from "@jest/globals";
import SmartHome from "../mediator/SmartHome";

describe("14. Mediator", ()=>{
    const smartHome = new SmartHome();

    test("smart home", ()=>{
        smartHome.window.open();
        smartHome.aircon.on();
        expect(smartHome.window.isClosed()).toBe(true);
    })
})