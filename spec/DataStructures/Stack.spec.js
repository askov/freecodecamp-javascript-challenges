var expect = require('chai').expect,
  Stack = require('../../DataStructures/Stack');

describe('Stack', function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it('should be function', function() {
    expect(Stack).to.be.a('function');
  });

  describe('#print()', function() {
    it('should be function', function() {
      expect(stack.print).to.be.a('function');
    });
    it('should return array', function() {
      expect(stack.print()).to.be.an('array');
    });
  });

  describe('#push()', function() {
    it('should push value to the end of collection', function() {
      stack.push(42);
      expect(stack.print().length).equal(1);
      stack.push(42);
      expect(stack.print().length).equal(2);
    });
  });

  describe('#pop()', function() {
    it('should return undefined if collection is empty', function() {
      expect(stack.pop()).equal(undefined);
    });
    it('should pop last element of non-empty collection and return it', function() {
      stack.push(42);
      stack.push(22);
      expect(stack.pop()).equal(22);
      expect(stack.print().length).equal(1);
    });
  });

  describe('#isEmpty()', function() {
    it('should return true if empty, false otherwise', function() {
      expect(stack.isEmpty()).equal(true);
      stack.push(42);
      expect(stack.isEmpty()).equal(false);
    });
  });

  describe('#clear()', function() {
    it('should clear collection', function() {
      stack.push(42);
      stack.clear();
      expect(stack.isEmpty()).equal(true);
    });
  });

  describe('#peek()', function() {
    it('should return undefined if collection is empty', function() {
      expect(stack.peek()).equal(undefined);
    });
    it('should return first element of non-empty collection', function() {
      stack.push(42);
      stack.push(22);
      expect(stack.peek()).equal(42);
    });
  });

});
