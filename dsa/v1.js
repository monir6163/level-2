// stateless vs stateful
const counter = (amount) => {
  let count = 0;
  count = count + amount;
  return count;
};

// console.log(counter(5));
// console.log(counter(3));

// statefull
const counter2 = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};
counter2.add(5);
counter2.add(3);
counter2.print();
