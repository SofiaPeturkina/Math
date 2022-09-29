export default class MathCharacter {
    static types = ["bowman", "swordsman", "magician", "daemon", "undead", "zombie"];
  
    constructor(name, type) {
      if (name.length < 2 || name.length > 10) {
        throw new Error("Ошибка! Имя персонажа должно иметь длину от 2 до 10 символов!");
      } else {
        this.name = name;
      }
      if (!MathCharacter.types.includes(type)) {
        throw new Error("Ошибка! Неверный тип персонажа!");
      } else {
        this.type = type;
      }

      this.firstAttack = 0;
      this.distance = 1;
      this.firstStoned = false;
    }
  
    set stoned(value) {
      this.firstStoned = value;
    }
  
    get stoned() {
      return this.firstStoned;
    }
  
    set attack(value) {
      this.firstAttack = value;
    }
  
    get attack() {
      let result = this.firstAttack;
      result -= (result * 0.1 * (this.distance - 1));
      if (this.firstStoned === true) {
        result = Math.round(result - Math.log2(this.distance) * 5);
      }
      return result;
    }
  }
  