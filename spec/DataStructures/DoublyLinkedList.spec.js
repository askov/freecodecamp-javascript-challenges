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
  it('should create node setting its data and prev props', function() {
    expect(node.data).equal('cat');
    expect(node.prev).equal('dog');
  });
  it('should create node with null next prop', function() {
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
    it('should return null for empty doubly linked list head', function() {
      expect(dll.printHead()).equal(null);
    });
  });





});
