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

  describe('#print()', function() {
    it('should be a function', function() {
      expect(set.print).to.be.a('function');
    });
    it('should return an array', function() {
      expect(set.print()).to.be.an('array');
    });
  });

  describe('#add()', function() {
    it('should add value to the collection', function() {
      expect(set.print().length).equal(0);
      set.add(42);
      expect(set.print().length).equal(1);
    });
    it('should add value only if it is not presented in the collection', function() {
      set.add(42);
      set.add(42);
      expect(set.print().length).equal(1);
    });
    it('should return true if value added, false otherwise', function() {
      expect(set.add(42)).equal(true);
      expect(set.add(42)).equal(false);
    });
  });



});
