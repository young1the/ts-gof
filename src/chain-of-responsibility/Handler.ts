export default abstract class Handler {
    protected nextHandler: Handler = null!;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler
    }
    run(url: string): void {
        this.process(url);
        if (this.nextHandler) this.nextHandler.run(url);
    }
    abstract process(url: string): void;
}