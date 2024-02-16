import { describe, test } from "@jest/globals";
import King from "../singleton";

describe("9. Singleton", ()=>{
    test("king", ()=>{
        // const king = new King();
        const king = King.getInstance();
        king.sayHello();
    })
})