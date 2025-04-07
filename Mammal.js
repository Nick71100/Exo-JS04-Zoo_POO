import Animal from "./Animal.js";

class Mammal extends Animal {
  constructor(nameParam, ageParam, genderParam, nbPawsPram) {
    super(nameParam, ageParam, genderParam);
    this.nbPaws = nbPawsPram;
  }

  toMove() {
    console.log(`${this.name} se déplace avec ${this.nbPaws} pattes.`);
  }
}

export default Mammal;
