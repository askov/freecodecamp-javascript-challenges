function Set() {
  // the var collection will hold our set
  var collection = [];

  this.print = function () {
    console.log(collection);
    return collection;
  };

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    const i = collection.indexOf(element);
    if (i !== -1) {
      collection.splice(i, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (setB) {
    const setC = new Set();
    collection.concat(setB.values()).forEach(el => {
      setC.add(el);
    });
    return setC;
  };

  this.intersection = function (setB) {
    const setC = new Set();
    collection.forEach(el => {
      if (setB.has(el)) {
        setC.add(el);
      }
    });
    return setC;
  };

}


const s1 = new Set();
const s2 = new Set();

s1.add('a');
s1.add('b');
s1.add('c');

s2.add('a');
s2.add('b');
s2.add('d');
s2.add('e');

console.log(s1.union(s2));