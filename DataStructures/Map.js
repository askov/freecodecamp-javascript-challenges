var Map = function() {
  this.collection = {};

  this.add = function(key, value) {
    this.collection[key] = value;
  };
  this.remove = function(key, value) {
    delete this.collection[key];
  };
  this.get = function(key) {
    return this.collection[key];
  };
  this.has = function(key) {
    return this.collection.hasOwnProperty(key);
  };
  this.values = function(key) {
    return Object.values(this.collection);
  };
  this.size = function() {
    return Object.keys(this.collection).length;
  };
  this.clear = function() {
    this.collection = {};
  };
};

const m = new Map();

m.add('foo', 'bar');
// m.has('bar');
console.log(m.has('bar'));
console.log(m.has('baz'));
