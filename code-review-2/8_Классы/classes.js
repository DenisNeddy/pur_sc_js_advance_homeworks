// class Car {
//   #model;
//   #make;
//   #run;

//   constructor(model,make,run) {
//     this.#model = model;
//     this.#make = make;
//     this.#run = run;
//   }

//   get run() {
//     return this.#run;
//   }

//   set changeRun (value) {
//     this.#run = value;
//   }

//   info() {
//     console.log(`Марка авто - ${this.#model}; Год выпуска - ${this.#make}; Пробег - ${this.#run};`);
//   }
// }

class Car {
  #_brand;
  #_model;
  #_mileage;

  constructor(brand, model, mileage) {
    this.#_brand = brand;
    this.#_model = model;
    this.#mileage = mileage;
  }

  get #mileage() {
    return this.#_mileage;
  }

  set #mileage(value) {
    this.#_mileage = value;
  }

  #checkMileage(value) {
    return value > this.#mileage;
  }

  changeMileage(value) {
    if(!this.#checkMileage(value)) {
      console.error(
        `
        the values are the same (current: ${this.#mileage}, new: ${value}). Mileage NOT changed
        `
      );
      return false;
    }

    console.log(`mileage changed from ${this.#mileage} to ${value}`);
    this.#_mileage = value;
    return true;
  }

  info() {
    console.log(
      `Марка: ;${this.#_brand}, Модель: ${this.#_model}, Пробег: ${this.#mileage}`
    )
  }
}