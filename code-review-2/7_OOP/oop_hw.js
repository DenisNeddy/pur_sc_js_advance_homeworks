const Character = function(race,name,language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function () {
  console.log(this.name);
  console.log(this.language);
}

const Ork = function(race,name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.attack = function() {
  console.log('AAataaack!!');
}

const Elf = function (race, name, language, spell) {
  Character.call(this, race, name, language );
  this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.setSpell = function() {
  console.log(`Зелье ${this.spell} приготовлено`);
};
Elf.prototype.useSpell = function() {
  console.log(`Зелье ${this.spell} использовано`);
}