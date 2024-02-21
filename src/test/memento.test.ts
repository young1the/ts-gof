import { describe, test } from "@jest/globals";
import BlindMan, { Action } from "../memento/BlindMan";
import Memento from "../memento/Memonto";

describe("15. Memento", () => {
    const blindMan = new BlindMan(0, 0, 10, 10)
    let minDistance = Number.MAX_VALUE;
    let memento: Memento = new Memento(0,0,[]);

    test("blind man", () => {
        while (true) {
            const action: Action = (Math.floor(Math.random() * 10) % 4) + 1
            const distance = blindMan.walk(action);
            if (distance === 0.0) {
                console.log("도착")
                break;
            }
            if (minDistance > distance) {
                minDistance = distance;
                memento = blindMan.createMemento()
            } else {
                blindMan.restoreMemento(memento);
            }
        }
        blindMan.resultPath();
    })


})