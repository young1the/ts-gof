import Handler from "./Handler";

export default class ProtocolHandler extends Handler {
    process(url: string): void {
        const index = url.indexOf("://");
        if (index < 0) {
            console.log("Protocol None");
        } else {
            console.log("Protocol " + url.substring(0, index));
        }
    }
}