import Animal from "./Animal.js";
import Mammal from "./Mammal.js";
import Bird from "./Bird.js";
import Monkey from "./Monkey.js";

const pig = new Mammal("Rosette", 5, "Femal", 4);
pig.description();
pig.toMove();
const albatros = new Bird("Joey", 2, "Male", "3,30 m");
albatros.description();
albatros.toFly();
const orangutan = new Monkey(
  "Bob",
  6,
  "Male",
  4,
  "en mettant son doigt dans son cul"
);
orangutan.description();
orangutan.doAcrobatics();
