var expect = require('chai').expect,
  Queue = require('../../DataStructures/Queue');

describe('Queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('should be function', function() {
    expect(Queue).to.be.a('function');
  });

  describe('#print()', function() {
    it('should be function', function() {
      expect(queue.print).to.be.a('function');
    });
    it('should return array', function() {
      expect(queue.print()).to.be.an('array');
    });
  });

  describe('#enqueue()', function() {
    it('should enqueue the value to the end of collection', function() {
      queue.enqueue(24);
      expect(queue.print().length).equal(1);
      queue.enqueue(42);
      expect(queue.print().length).equal(2);
      const collection = queue.print();
      expect(collection[collection.length - 1]).equal(42);
    });
  });

  describe('#dequeue()', function() {
    it('should return undefined if collection is empty', function() {
      expect(queue.dequeue()).equal(undefined);
    });
    it('should dequeue firts element of non-empty collection and return it', function() {
      queue.enqueue(42);
      queue.enqueue(22);
      expect(queue.dequeue()).equal(42);
      expect(queue.print().length).equal(1);
    });
  });

  describe('#isEmpty()', function() {
    it('should return true if queue is empty, false otherwise', function() {
      expect(queue.isEmpty()).equal(true);
      queue.enqueue(42);
      expect(queue.isEmpty()).equal(false);
    });
  });

  describe('#size()', function() {
    it('should return the number of items in queue', function() {
      expect(queue.size()).equal(0);
      queue.enqueue(42);
      queue.enqueue(1);
      expect(queue.size()).equal(2);
    });
  });

  describe('#front()', function() {
    it('should return undefined if collection is empty', function() {
      expect(queue.front()).equal(undefined);
    });
    it('should return first element of non-empty collection', function() {
      queue.enqueue(42);
      queue.enqueue(22);
      expect(queue.front()).equal(42);
    });
  });

});
