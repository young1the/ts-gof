import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
    constructor(article: Article) {
        super(article)
    }

    protected titleHtml(): string {
        return this.article.getTitle()
    }
    protected contentHtml(): string {
        return `content: ${this.article.getContent().join("")}`
    }
    protected footerHtml(): string {
        return `footer: ${this.article.getFooter()}`
    }

}