var expect = require('chai').expect,
  CircularQueue = require('../../DataStructures/CircularQueue');

describe('CircularQueue', function() {
  var cq;

  beforeEach(function() {
    cq = new CircularQueue(5);
  });

  it('should be function', function() {
    expect(CircularQueue).to.be.a('function');
  });

  describe('#print()', function() {
    it('should be function', function() {
      expect(cq.print).to.be.a('function');
    });
    it('should return array', function() {
      expect(cq.print()).to.be.an('array');
    });
  });

  describe('initial queue', function() {
    it('array length should be equal to initial size', function() {
      expect(cq.print().length).equal(5);
    });
    it('array should contain n=size null elements', function() {
      cq.print().every(el => expect(el).equal(null));
    });
  });

  describe('#calcPointerPosition(pointer)', function() {
    it('should return 0 if pointer >= size - 1', function() {
      expect(cq.calcPointerPosition(4)).equal(0);
      expect(cq.calcPointerPosition(5)).equal(0);
    });
    it('should return pointer + 1 if pointer < size - 1', function() {
      expect(cq.calcPointerPosition(3)).equal(4);
      expect(cq.calcPointerPosition(2)).equal(3);
    });
  });

  describe('#enqueue(item)', function() {
    it('should try to enqueue item and return successfully enqueued item or null otherwise', function() {
      expect(cq.enqueue(2)).equal(2);
      expect(cq.enqueue(3)).equal(3);
      expect(cq.enqueue(4)).equal(4);
      expect(cq.enqueue(5)).equal(5);
      expect(cq.enqueue(6)).equal(6);
      expect(cq.enqueue(7)).equal(null);
    });
  });

  describe('#dequeue()', function() {
    it('should try to dequeue item and return successfully dequeued item or null otherwise', function() {
      expect(cq.dequeue()).equal(null);
      expect(cq.enqueue(2));
      expect(cq.enqueue(3));
      expect(cq.enqueue(4));
      expect(cq.dequeue()).equal(2);
      expect(cq.dequeue()).equal(3);
      expect(cq.dequeue()).equal(4);
      expect(cq.dequeue()).equal(null);
    });
  });

});
