import Animal from "./Animal.js";

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

export default Bird;
