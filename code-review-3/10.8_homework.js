class Billing {
  #amount = 1000;

  calculateTotal() {
    return this.#amount;
  }
}

class fixBilling extends Billing {
  constructor() {
    super();
  }
}

class hourBilling extends Billing {
  #hour;

  constructor(hour) {
    super();
    this.#hour = hour;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#hour;
  }
}

class itemBilling extends Billing {
  #items;

  constructor(items) {
    super();
    this.#items = items;
  }
  
  calculateTotal() {
    return super.calculateTotal() * this.#items.length;
  }
}
