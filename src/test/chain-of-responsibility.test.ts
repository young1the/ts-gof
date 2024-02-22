import { describe, test } from "@jest/globals";
import ProtocolHandler from "../chain-of-responsibility/ProtocolHandler";
import DomainHandler from "../chain-of-responsibility/DomainHandler";
import PortHandler from "../chain-of-responsibility/PortHandler";

describe("17. Chain Of Responsibility", ()=>{
    const http = "http://localhost:3000";
    const onlyDomain = "localhost";

    test("domain", ()=>{
        const handler1 = new ProtocolHandler()
        const handler2 = new DomainHandler();
        const handler3 = new PortHandler();
        handler1.setNext(handler2).setNext(handler3);
        handler1.run(http);
        handler1.run(onlyDomain);
    })
})