module.exports = function Stack() {
  var collection = [];

  this.print = function() {
    return collection;
  };

  this.pop = function() {
    return collection.pop();
  };

  this.push = function(el) {
    collection.push(el);
  };

  this.peek = function() {
    return collection[0];
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };

  this.clear = function() {
    collection = [];
  };
};
