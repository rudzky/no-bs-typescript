interface DataBase<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | symbol | number;

class InMemoryDatabase<T, K extends DBKeyType> implements DataBase<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new InMemoryDatabase<number, string>();
myDB.set("age", 22);
console.log(myDB.get("age"));

const yourDB = new PersistentMemoryDB<boolean, string>();
yourDB.set("isStudent", false);
console.log(yourDB.get("isStudent"));
const copyDB = yourDB.saveToString();
yourDB.set("isStudent", true);
console.log(yourDB.get("isStudent"));

const theirDB = new PersistentMemoryDB<boolean, string>();
theirDB.restoreFromString(copyDB);
console.log(theirDB.get("isStudent"));
