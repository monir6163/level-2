class Counter {
  static counter: number = 0;

  static increment() {
    Counter.counter = Counter.counter + 1;
  }
  static decrement() {
    Counter.counter = Counter.counter - 1;
  }
}
const insatance1 = new Counter();
console.log(Counter.increment());
