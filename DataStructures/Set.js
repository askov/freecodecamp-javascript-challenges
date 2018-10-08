module.exports = function Set() {
  // the var collection will hold our set
  var collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };

  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element) {
    const i = collection.indexOf(element);
    if (i !== -1) {
      collection.splice(i, 1);
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.union = function(setB) {
    const setC = new Set();
    collection.concat(setB.values()).forEach(el => {
      setC.add(el);
    });
    return setC;
  };

  this.intersection = function(setB) {
    const setC = new Set();
    collection.forEach(el => {
      if (setB.has(el)) {
        setC.add(el);
      }
    });
    return setC;
  };

  this.difference = function(setB) {
    const setC = new Set();
    collection.forEach(el => {
      if (!setB.has(el)) {
        setC.add(el);
      }
    });
    return setC;
  };

  this.subset = function(setB) {
    return !this.difference(setB).values().length;
  };

};
