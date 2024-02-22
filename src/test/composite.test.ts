import { describe, test, expect } from "@jest/globals";
import Folder from "../composite/Folder";
import File from "../composite/File";

describe("11.Composite", () => {
    const root = new Folder("루트");
    const childFolder1 = new Folder("자식1");
    const childFolder2 = new Folder("자식2");
    const childFile = new File("자식 파일", 3);
    const grandFile = new File("자식1의 파일", 2);
    root.add(childFolder1)
    childFolder1.add(grandFile);
    root.add(childFolder2)
    root.add(childFile)

    test("print", ()=>{
        root.print();
    })

    test("size", ()=>{
        expect(childFolder1.getSize()).toBe(2);
        expect(root.getSize()).toBe(5);
    })
})