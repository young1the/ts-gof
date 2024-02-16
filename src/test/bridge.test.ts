import { describe, test, expect } from "@jest/globals";
import Draft from "../bridge/Draft";
import SimpleDisplay from "../bridge/SimpleDisplay";
import CharacterCount from "../bridge/CharacterCount";

describe("7. Bridge", ()=>{
    const title = "복원된 지구"
    const author = "Kim"
    const content = [
        "플라스틱 사용의 감소",
        "바다 생물 어획량 감소로 인하여",
        "지구는 복원되었다.",
    ]
    let draft : Draft = new Draft(title, author, content);
    test("simple display", ()=>{
        const display = new SimpleDisplay();
        draft.print(display);
    })
    
    test("charater count", ()=>{
        const display = new SimpleDisplay();
        draft = new CharacterCount(title, author, content);
        draft.print(display);
        console.log((draft as CharacterCount).getCharacterCount())
    })
})