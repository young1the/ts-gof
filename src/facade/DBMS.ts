import Row from "./Row";

export default class DBMS {
    private db = new Map<string, Row>();

    constructor() {
        this.db.set("John", new Row("John", "1990-01-01", "hello@mail.com"));
        this.db.set("Jane", new Row("Jane", "1991-01-01", "jane@mail.co.kr"));
    }

    query(name: string, callback: (row: Row) => void): void {
        setTimeout(() => {
            callback(this.db.get(name) as Row);
        }, 1000);
    }
}