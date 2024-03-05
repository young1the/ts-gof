import { describe,test,expect } from "@jest/globals";
import Player from "../state/Player";

describe("23. State", ()=>{
    const player = new Player();

    test("Singleton Test", ()=>{
        player.getState().walk();
        player.getState().run();
        player.getState().run();
    })
})