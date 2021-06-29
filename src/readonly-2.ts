class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const coolDog = new Doggy("LG", 12);
console.log(coolDog.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.instance;
DogList.addDog(coolDog);
console.log(DogList.instance.getDogs());

// const myDogList = new DogList();
