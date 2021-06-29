interface DataBase {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements DataBase {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new InMemoryDatabase();
myDB.set("name", "Pete");
console.log(myDB.get("name"));

const yourDB = new PersistentMemoryDB();
yourDB.set("surname", "Rudzky");
console.log(yourDB.get("surname"));
const copyDB = yourDB.saveToString();
yourDB.set("surname", "Smith");
console.log(yourDB.get("surname"));

const theirDB = new PersistentMemoryDB();
theirDB.restoreFromString(copyDB);
console.log(theirDB.get("surname"));
