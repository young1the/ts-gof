import Handler from "./Handler";

export default class PortHandler extends Handler {
    process(url: string): void {
        const startIndex = url.indexOf("://");
        const lastIndexOf = url.lastIndexOf(":");
        let port;
        if (lastIndexOf >= 0 && startIndex !== lastIndexOf) {
            port = url.slice(lastIndexOf);
        } 
        console.log(`Port ${port}`)
    }
}