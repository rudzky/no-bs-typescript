abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttak()}`);
  }

  abstract getSpecialAttak(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttak(): string {
    return "Hadoken";
  }

  get name(): string {
    return "Ryu";
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttak(): string {
    return "Lighting Kick";
  }

  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
ryu.fight();

const chunli = new ChunLi();
chunli.fight();
