module.exports = function Queue() {
  var collection = [];

  this.print = function() {
    return collection;
  };

  this.enqueue = function(el) {
    collection.push(el);
  };

  this.dequeue = function() {
    return collection.shift();
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };

  this.size = function() {
    return collection.length;
  };

  this.front = function() {
    return collection[0];
  };
};
