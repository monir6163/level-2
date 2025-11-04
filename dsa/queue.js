// First in First out = Fifo

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
for (let i = 1; i <= 10; i++) {
  queue.enqueue(i);
}
queue.print();
