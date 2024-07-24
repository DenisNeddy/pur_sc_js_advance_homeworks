class Character {

  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`Мое имя ${this.name}, мой родной язык ${this.language}`);
  }
}

class Ork extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(`Моя раса ${this.race}, имя мне ${this.name}, я говорю на языке ${this.language} в моей руке ${this.weapon}`)
  }

  attack() {
    console.log(`${this.name} сейчас будет бить используя ${this.weapon}`);
  }
}

class Elf extends Character {
  #spell;
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.#spell = spell;
  }

  speak() {
    console.log(`Я лесной эльф и мое имя ${this.name} и я умею варить зелье ${this.#spell}`)
  }

  get getSpell() {
    console.log(`Мое зелье ${this.#spell}`);
  }

  set setSpell(value) {
    this.#spell = value;
  }
}

let ogr = new Ork('Ogr', 'Mamanu', 'Orginskya', 'Топор');
let greenElf = new Elf('Elf', 'Эулрон', 'Эльфийский', 'Заклинание Друидов');
