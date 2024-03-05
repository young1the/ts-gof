import { describe, expect, test } from "@jest/globals";
import Data from "../builder2/Data";
import JSONBuilder from "../builder2/JSONBuilder";
import Director from "../builder2/Director";
import PlainTextBuilder from "../builder2/PlainTextBuilder";

describe("21. Builder (2/2)", () => {
    const data = new Data("John", "30");
    const jsonDir = new Director(new JSONBuilder(data));
    const plainDir = new Director(new PlainTextBuilder(data));
    const json = jsonDir.build();
    const plain = plainDir.build();
    test("Builder Test", () => {
        expect(json).toEqual("{\n  \"name\": \"John\",\n  \"age\": 30\n}\n");
        expect(plain).toEqual("Name: John\nAge: 30\n");
    })
})