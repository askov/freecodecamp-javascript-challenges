function Queue() {
  var collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (el) {
    collection.push(el);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };

  this.size = function () {
    return collection.length;
  };

  this.front = function () {
    return collection[0];
  };
}


const q = new Queue();

q.enqueue('dodo');
q.enqueue('elephant');
q.enqueue('human');
q.print();