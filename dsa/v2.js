class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counterValue = new Counter(0);
counterValue.add(50);
counterValue.add(50);
counterValue.print();
