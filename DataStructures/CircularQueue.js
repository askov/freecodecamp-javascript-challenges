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
    console.log('#queue', this.queue);
    return this.queue;
  }

  moveWritePointer() {
    if (this.write < this.max) {
      this.write++;
    } else {
      this.write = 0;
    }
  }

  enqueue(item) {
    this.queue[this.write] = item;
    this.moveWritePointer();
    console.log('#enqueue', item);
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}


const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.enqueue(6);
cq.print();