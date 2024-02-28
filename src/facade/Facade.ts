import Cache from "./Cache";
import DBMS from "./DBMS";
import Message from "./Message";

class Facade {
    private dbms: DBMS;
    private cache: Cache;

    constructor() {
        this.dbms = new DBMS();
        this.cache = new Cache();
    }

    public queryName(name: string, onAfterQuery: () => void, onBeforeQuery: () => void) {
        this.dbms.query(name, (row) => {
            console.log(row);
            this.cache.put(row);
        });
        
        const cachedRow = this.cache.get(name);
        const messgae = new Message(cachedRow as any);
        messgae.print();
    }
}
export default Facade;