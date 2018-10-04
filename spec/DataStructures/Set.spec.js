var expect = require('chai').expect,
  Set = require('../../DataStructures/Set');

describe('Set', function() {
  var set;

  beforeEach(function() {
    set = new Set();
  });

  it('should be a function', function() {
    expect(Set).to.be.a('function');
  });

  describe('#values()', function() {
    it('should be a function', function() {
      expect(set.values).to.be.a('function');
    });
    it('should return an array', function() {
      expect(set.values()).to.be.an('array');
    });
  });

  describe('#add()', function() {
    it('should add value to the collection', function() {
      expect(set.values().length).equal(0);
      set.add(42);
      expect(set.values().length).equal(1);
    });
    it('should add value only if it is not presented in the collection', function() {
      set.add(42);
      set.add(42);
      expect(set.values().length).equal(1);
    });
    it('should return true if value added, false otherwise', function() {
      expect(set.add(42)).equal(true);
      expect(set.add(42)).equal(false);
    });
  });

  describe('#has()', function() {
    it('should check if item is presented in collection', function() {
      expect(set.has(42)).equal(false);
      set.add(42);
      expect(set.has(42)).equal(true);
    });
  });

  describe('#size()', function() {
    it('should return the collection size', function() {
      expect(set.size()).equal(0);
      set.add(42);
      expect(set.size()).equal(1);
    });
  });

  describe('#remove()', function() {
    it('should remove an item from collection and return true if removed, false otherwise', function() {
      expect(set.remove(42)).equal(false);
      set.add(42);
      expect(set.remove(42)).equal(true);
    });
  });
});
