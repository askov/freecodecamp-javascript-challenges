var expect = require('chai').expect,
  Node = require('../../DataStructures/DoublyLinkedList').Node,
  DoublyLinkedList = require('../../DataStructures/DoublyLinkedList').DoublyLinkedList;

describe('Node (doubly linked list)', function() {
  var node;

  beforeEach(function() {
    node = new Node('cat', 'dog');
  });

  it('should be a function', function() {
    expect(Node).to.be.a('function');
  });

  it('should create node setting its data, prev and next props', function() {
    expect(node.data).equal('cat');
    expect(node.prev).equal('dog');
    expect(node.next).equal(null);
  });

});

describe('DoublyLinkedList', function() {
  var dll;

  beforeEach(function() {
    dll = new DoublyLinkedList();
  });

  it('should be a function', function() {
    expect(DoublyLinkedList).to.be.a('function');
  });

  describe('#printHead()', function() {
    it('should be a function', function() {
      expect(dll.printHead).to.be.a('function');
    });
    it('should return null for empty doubly linked list head', function() {
      expect(dll.printHead()).equal(null);
    });
    it('should return Node instance for not empty list', function() {
      dll.add('cat');
      expect(dll.printHead() instanceof Node).equal(true);
    });
  });

  describe('#printTail()', function() {
    it('should be a function', function() {
      expect(dll.printTail).to.be.a('function');
    });
    it('should return null for empty doubly linked list tail', function() {
      expect(dll.printTail()).equal(null);
    });
    it('should return Node instance for not empty list', function() {
      dll.add('cat');
      expect(dll.printTail() instanceof Node).equal(true);
    });
  });

  describe('#add(el)', function() {
    it('should be a function', function() {
      expect(dll.add).to.be.a('function');
    });
    it('should always return undefined', function() {
      expect(dll.add('cat')).equal(undefined);
    });
    it('should set tail equal to head after first element added', function() {
      dll.add('cat');
      expect(dll.printHead()).equal(dll.printTail());
    });
    it('should set head equal to the node after first element added', function() {
      dll.add('cat');
      expect(dll.printHead() instanceof Node).equal(true);
    });
    it('should properly link added nodes', function() {
      dll.add('cat');
      dll.add('dog');
      expect(dll.printTail().next).equal(null);
      expect(dll.printTail().data).equal('dog');
      expect(dll.printHead().data).equal('cat');
      expect(dll.printHead().prev).equal(null);
      expect(dll.printHead().next).equal(dll.printTail());
    });
  });

  describe('#remove(el)', function() {
    it('should be a function', function() {
      expect(dll.remove).to.be.a('function');
    });
    it('should return null for empty list', function() {
      expect(dll.remove('cat')).equal(null);
    });
    it('should return undefined when item removed', function() {
      dll.add('cat');
      expect(dll.remove('cat')).equal(undefined);
    });
    it('should properly handle single element removal', function() {
      dll.add('cat');
      dll.remove('cat');
      expect(dll.printHead()).equal(null);
      expect(dll.printTail()).equal(null);
    });
    it('should properly handle tail removal when list has more than one element', function() {
      dll.add('cat');
      dll.add('bird');
      dll.add('dog');
      dll.remove('dog');
      expect(dll.printTail().data).equal('bird');
      expect(dll.printTail().prev.data).equal('cat');
      expect(dll.printTail().next).equal(null);
    });
    it('should properly handle middle element removal when list has more than one element', function() {
      dll.add('cat');
      dll.add('bird');
      dll.add('dog');
      dll.remove('bird');
      expect(dll.printTail().data).equal('dog');
      expect(dll.printTail().prev.data).equal('cat');
      expect(dll.printHead().next.data).equal('dog');
    });
  });

});
