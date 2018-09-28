module.exports = function PriorityQueue() {
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
    const deq = this.collection.shift();
    return deq ? deq[0] : deq;
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  };

  this.size = function() {
    return this.collection.length;
  };

  this.front = function() {
    const front = this.collection[0];
    return front && front[0];
  };
};
