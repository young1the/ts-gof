export  interface Mediator {
    participantChanged(participant: Participant): void;
}

export  abstract class Participant {
    constructor(protected mediator: Mediator) { }
    abstract displayState(): void;
}