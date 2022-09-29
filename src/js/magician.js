import MathCharacter from "./basic";

export default class Magician extends MathCharacter {
  constructor(name, type) {
    super(name, "magician");
    this.firstAttack = 50;
  }
}
