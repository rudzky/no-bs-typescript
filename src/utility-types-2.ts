type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & {
  fullName: string;
} {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
}

function permuteRows<T extends (...args: any) => any>( //Typ musi być funkcją
  iteratorFunc: T, //funkcja jest tego typu oczywiście
  data: Parameters<T>[0][] //drugi argument musi pasować do funkcji którą przesyłamy - tu akurat tablica takich argumentów
): ReturnType<T>[] {
  // zwracamy tablice obiektów które normalnie wychodzą z przesłanej funkcji
  return data.map(iteratorFunc);
}

console.log(
  permuteRows(addFullName, [
    { first: "Pete", last: "Rudzky" },
    { first: "Tommy Lee", last: "Jones" },
  ])
);

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

function createObjects<T extends new (...args: any) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [
    { first: "Mark", last: "Zuckerberg" },
  ]).map((obj) => obj.fullName)
);
