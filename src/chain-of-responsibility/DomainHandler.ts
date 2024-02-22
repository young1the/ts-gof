import Handler from "./Handler";

export default class DomainHandler extends Handler {
    process(url: string): void {
        const index = url.indexOf("://");
        const lastIndex = url.lastIndexOf(":");
        const domain = index < 0 && lastIndex < 0 ? url
        : lastIndex === index ? url.slice(index + 3)
        : url.slice(index + 3, lastIndex);
        console.log(`Domain ${domain}`);
    }

}