import Article from "./Article";

export default abstract class DisplayArticleTemplate {

    constructor(protected article: Article) {}

    public readonly displayHtml = () => { // 파생클래스에서 코드를 변경하지 못하도록 함
        return `
            ${this.titleHtml()}
            ${this.contentHtml()}
            ${this.footerHtml()}
        `
    }

    protected abstract titleHtml(): string;
    protected abstract contentHtml(): string;
    protected abstract footerHtml(): string;

}