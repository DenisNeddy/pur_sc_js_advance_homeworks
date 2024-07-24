class Billing {
  amount = 1;

  calculateTotal() {
  }
}

class fixBilling extends Billing {
  calculateTotal() {
    return this.amount;
  }
}

class hourBilling extends Billing {
  constructor(hour) {
    this.hour = hour;
  }

  calculateTotal() {
    return amount *= this.hour;
  }
}

class itemBilling extends Billing {
  constructor(items) {
    this.items = items;
  }
  
  calculateTotal() {
    return amount * items.length;
  }
}