class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  calcPointerPosition(pointer) {
    if (pointer < this.max) {
      return ++pointer;
    } else {
      return 0;
    }
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write = this.calcPointerPosition(this.write);
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] !== null) {
      const item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = this.calcPointerPosition(this.read);
      return item;
    }
    return null;
  }
}


const cq = new CircularQueue(5);

console.log('#enqueue', cq.enqueue(1));
console.log('#enqueue', cq.enqueue(2));
console.log('#enqueue', cq.enqueue(3));
console.log('#enqueue', cq.enqueue(4));
console.log('#enqueue', cq.enqueue(5));
console.log('#enqueue', cq.enqueue(6));
console.log('#enqueue', cq.dequeue());
console.log('#enqueue', cq.enqueue(7));
console.log('#enqueue', cq.enqueue(8));
console.log('#enqueue', cq.dequeue());
console.log('#enqueue', cq.enqueue(8));


cq.print();
