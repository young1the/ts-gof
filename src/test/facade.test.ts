import { describe, jest, test } from "@jest/globals";
import DBMS from "../facade/DBMS";
import Cache from "../facade/Cache";
import Message from "../facade/Message";
import Facade from "../facade/Facade";

describe("19. Facade", () => {
    const dbms = new DBMS();
    const cache = new Cache();

    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout")

    test("Facade Test", () => {
        const name = "John";
        dbms.query(name, (row) => {
            console.log(row);
            cache.put(row);
        });

        const cachedRow = cache.get(name);
        const messgae = new Message(cachedRow as any);
        messgae.print();
    })

    test("Facade Test", () => {
        const name = "Jane";
        const facade = new Facade();
        facade.queryName(name, () => {
            console.log("onAfterQuery");
        }, () => {
            console.log("onBeforeQuery");
        });
    })
})