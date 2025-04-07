class Animal {
  constructor(nameParam, ageParam, genderParam) {
    this.name = nameParam;
    this.age = ageParam;
    this.gender = genderParam;
  }
}

class Mammal extends Animal {
  constructor(nameParam, ageParam, genderParam, nbPawsPram) {
    super(nameParam, ageParam, genderParam);
    this.nbPaws = nbPawsPram;
  }

  toMove() {
    console.log(`${this.name} se déplace avec ${this.nbPaws} pattes.`);
  }
}

class Bird extends Animal {
  constructor(nameParam, ageParam, genderParam, wingspanParam) {
    super(nameParam, ageParam, genderParam);
    this.wingspan = wingspanParam;
  }

  toFly() {
    console.log(
      `${this.name} vole en battant des ailes qui ont une envergure de ${this.wingspan}.`
    );
  }
}

class Monkey extends Mammal {
  constructor(
    nameParam,
    ageParam,
    genderParam,
    nbPawsPram,
    acrobaticsMethodeParam
  ) {
    super(nameParam, ageParam, genderParam, nbPawsPram);
    this.acrobaticsMethode = acrobaticsMethodeParam;
  }
  doAcrobatics() {
    console.log(`${this.name} fait des acrobaties ${this.acrobaticsMethode}.`);
  }
}

const pig = new Mammal("Rosette", 5, "Femal", 4);
pig.toMove();
const albatros = new Bird("Joey", 2, "Male", "3,30 m");
albatros.toFly();
const orangutan = new Monkey(
  "Bob",
  6,
  "Male",
  4,
  "en mettant son doigt dans son cul"
);
orangutan.doAcrobatics();
