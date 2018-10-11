var expect = require('chai').expect,
  Node = require('../../DataStructures/LinkedList').Node,
  LinkedList = require('../../DataStructures/LinkedList').LinkedList;

describe('Node (linked list)', function() {
  var node;

  beforeEach(function() {
    node = new Node('cat');
  });

  it('should be a function', function() {
    expect(Node).to.be.a('function');
  });

  it('should create node setting its data, prev and next props', function() {
    expect(node.element).equal('cat');
    expect(node.next).equal(null);
  });

});

describe('LinkedList', function() {
  var ll;

  beforeEach(function() {
    ll = new LinkedList();
  });

  it('should be a function', function() {
    expect(LinkedList).to.be.a('function');
  });






});
