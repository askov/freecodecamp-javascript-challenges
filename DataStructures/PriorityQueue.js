function PriorityQueue() {
  this.collection = [];

  this.printCollection = function() {
    return this.collection;
  };

  this.enqueue = function(el) {
    let pos = this.collection.length;
    for (let i = 0; i < this.collection.length; i++) {
      if (el[1] < this.collection[i][1]) {
        pos = i;
        break;
      }
    }
    this.collection.splice(pos, 0, el);
  };

  this.dequeue = function() {
    return this.collection.shift()[0];
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  };

  this.size = function() {
    return this.collection.length;
  };

  this.front = function() {
    return this.collection[0][0];
  };
}


const pq = new PriorityQueue();

pq.enqueue(['dodo', 1]);
pq.enqueue(['elephant', 3]);
pq.enqueue(['human', 1]);
console.log(pq.collection);
