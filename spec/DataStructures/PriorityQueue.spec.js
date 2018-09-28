var expect = require('chai').expect,
  PriorityQueue = require('../../DataStructures/PriorityQueue');

describe('PriorityQueue', function() {
  var pq;

  beforeEach(function() {
    pq = new PriorityQueue();
  });

  it('should be function', function() {
    expect(PriorityQueue).to.be.a('function');
  });

  describe('#printCollection()', function() {
    it('should be function', function() {
      expect(pq.printCollection).to.be.a('function');
    });
    it('should return array', function() {
      expect(pq.printCollection()).to.be.an('array');
    });
  });

  describe('#enqueue()', function() {
    it('should enqueue the value taking priority into account (assuming lower priorities are given precedence)', function() {
      pq.enqueue(['dodo', 1]);
      pq.enqueue(['elephant', 3]);
      pq.enqueue(['human', 1]);
      expect(pq.printCollection()).to.deep.equal([
        ['dodo', 1],
        ['human', 1],
        ['elephant', 3]
      ]);
    });
  });

  describe('#dequeue()', function() {
    it('should return undefined if collection is empty', function() {
      expect(pq.dequeue()).equal(undefined);
    });
    it('should dequeue first element of non-empty collection and return its value', function() {
      pq.enqueue(['elephant', 3]);
      pq.enqueue(['dodo', 1]);
      expect(pq.dequeue()).equal('dodo');
      expect(pq.printCollection().length).equal(1);
    });
  });

  describe('#isEmpty()', function() {
    it('should return true if priority queue is empty, false otherwise', function() {
      expect(pq.isEmpty()).equal(true);
      pq.enqueue(['dodo', 1]);
      expect(pq.isEmpty()).equal(false);
    });
  });

  describe('#size()', function() {
    it('should return the number of items in priority queue', function() {
      expect(pq.size()).equal(0);
      pq.enqueue(['elephant', 3]);
      pq.enqueue(['dodo', 1]);
      expect(pq.size()).equal(2);
    });
  });

  describe('#front()', function() {
    it('should return undefined if priority queue is empty', function() {
      expect(pq.front()).equal(undefined);
    });
    it('should return first element value of non-empty priority queue', function() {
      pq.enqueue(['elephant', 3]);
      pq.enqueue(['dodo', 1]);
      expect(pq.front()).equal('dodo');
    });
  });

});
