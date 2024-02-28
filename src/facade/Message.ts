import Row from "./Row";

export default class Message {
    constructor(private row: Row) {
    }

    print(): void {
        if (!this.row) {
            console.log("No row");
            return;
        }
        console.log(`Name: ${this.row.name}`);
        console.log(`Birthday: ${this.row.birthday}`);
        console.log(`Email: ${this.row.email}`);
    }
}