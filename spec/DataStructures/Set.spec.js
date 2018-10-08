var expect = require('chai').expect,
  Set = require('../../DataStructures/Set');

describe('Set', function() {
  var set, s1, s2;

  beforeEach(function() {
    set = new Set();
    s1 = new Set();
    s2 = new Set();
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

  describe('#add(el)', function() {
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

  describe('#has(el)', function() {
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

  describe('#remove(el)', function() {
    it('should remove an item from collection and return true if removed, false otherwise', function() {
      expect(set.remove(42)).equal(false);
      set.add(42);
      expect(set.remove(42)).equal(true);
    });
  });

  describe('#subset(set)', function() {
    it('should remove an item from collection and return true if removed, false otherwise', function() {
      s1.add(1);
      s1.add(2);
      s1.add(3);
      s2.add(3);
      s2.add(1);
      expect(s1.subset(s2)).equal(false);
      expect(s2.subset(s1)).equal(true);
    });
  });

  describe('#difference(set)', function() {
    it('should return new difference set', function() {
      s1.add(1);
      s1.add(2);
      s1.add(3);
      s2.add(3);
      s2.add(1);
      const diff = s1.difference(s2);
      expect(diff instanceof Set).equal(true);
      expect(diff.values()).deep.equal([2]);
    });
  });

  describe('#intersection(set)', function() {
    it('should return new intersection set', function() {
      s1.add(1);
      s1.add(2);
      s1.add(3);
      s2.add(3);
      s2.add(1);
      const intersection = s1.intersection(s2);
      expect(intersection instanceof Set).equal(true);
      expect(intersection.values()).deep.equal([1, 3]);
    });
  });

  describe('#union(set)', function() {
    it('should return new union set', function() {
      s1.add(1);
      s1.add(2);
      s2.add(1);
      s2.add(3);
      const union = s1.intersection(s2);
      expect(union instanceof Set).equal(true);
      expect(union.values()).deep.equal([1]);
    });
  });
});
