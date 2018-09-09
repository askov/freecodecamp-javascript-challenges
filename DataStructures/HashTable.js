var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};

var HashTable = function () {
  this.collection = {};
  // change code below this line
  this.add = function (key, value) {
    const k = hash(key);
    if (!this.collection.hasOwnProperty(k)) {
      this.collection[k] = [{ [key]: value }];
    } else {
      this.collection[k] = [...this.collection[k], { [key]: value }]
    }
  };
  this.remove = function (key) {
    const k = hash(key);
    if (!this.collection[k]) return;
    if (this.collection[k].length === 1) {
      delete this.collection[k];
    } else {
      const i = this.collection[k].findIndex(el => el.key === key);
      this.collection.splice(i, 1);
    }
  };
  this.lookup = function (key) {
    const k = hash(key);
    if (!this.collection[k]) return null;
    return this.collection[k].find(el => el[key]);
  };

  // change code above this line
};

const h = new HashTable();

h.add('foo', 42);
h.add('foo', 38);


console.log(h.lookup('foo'));