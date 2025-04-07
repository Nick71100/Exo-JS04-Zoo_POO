import Mammal from "./Mammal.js";

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

export default Monkey;
