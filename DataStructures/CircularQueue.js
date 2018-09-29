module.exports = class CircularQueue {
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
};
