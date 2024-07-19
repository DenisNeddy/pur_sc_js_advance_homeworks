class Car {
  #model;
  #make;
  #run;

  constructor(model,make,run) {
    this.#model = model;
    this.#make = make;
    this.#run = run;
  }

  get run() {
    return this.#run;
  }

  set changeRun (value) {
    this.#run = value;
  }

  info() {
    console.log(`Марка авто - ${this.#model}; Год выпуска - ${this.#make}; Пробег - ${this.#run};`);
  }
}