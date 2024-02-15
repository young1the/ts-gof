import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
    constructor(article: Article) { super(article) }

    protected titleHtml(): string {
        return `<input>${this.article.getTitle}</input>`
    }
    protected contentHtml(): string {
        return `${this.article.getContent}`
    }
    protected footerHtml(): string {
        return `${this.article.getFooter}`
    }

}