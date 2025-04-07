class Animal {
  constructor(nameParam, ageParam, genderParam) {
    this.name = nameParam;
    this.age = ageParam;
    this.gender = genderParam;
  }
  description() {
    console.log(
      `L'animal ${this.name} à ${this.age} ans et est un(e) ${this.gender}.`
    );
  }
}

export default Animal;
