import Draft from "./Draft";

export default class CharacterCount extends Draft {
    constructor(title: string, author: string, content: string[]) {
        super(title, author, content);
    }

    getCharacterCount(): number {
        let count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        count += this.getContent().reduce((acc, curr) => acc + curr.length, 0);
        return count;
    }
}