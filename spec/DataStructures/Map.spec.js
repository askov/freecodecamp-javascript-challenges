var expect = require('chai').expect,
  Map = require('../../DataStructures/Map');

describe('Map', function() {
  var mp;

  beforeEach(function() {
    mp = new Map();
  });

  it('should be a function', function() {
    expect(Map).to.be.a('function');
  });

  describe('#add(key, value)', function() {
    it('should be a function', function() {
      expect(mp.add).to.be.a('function');
    });
    it('should add new (key, value) pair to collection', function() {
      mp.add('foo', 'bar');
      expect(mp.collection.foo).equal('bar');
    });
  });

  describe('#remove(key)', function() {
    it('should be a function', function() {
      expect(mp.remove).to.be.a('function');
    });
    it('should remove (key, value) pair', function() {
      mp.add('foo', 'bar');
      expect(mp.collection.foo).equal('bar');
      mp.remove('foo');
      expect(mp.collection.foo).equal(undefined);
    });
  });

  describe('#get(key)', function() {
    it('should be a function', function() {
      expect(mp.get).to.be.a('function');
    });
    it('should get value by key', function() {
      mp.add('foo', 'bar');
      expect(mp.get('foo')).equal('bar');
    });
  });

  describe('#has(key)', function() {
    it('should be a function', function() {
      expect(mp.get).to.be.a('function');
    });
    it('should check if key presented', function() {
      mp.add('foo', 'bar');
      expect(mp.has('foo')).equal(true);
      expect(mp.has('bar')).equal(false);
    });
  });

  describe('#values()', function() {
    it('should be a function', function() {
      expect(mp.values).to.be.a('function');
    });
    it('should return list of presented values', function() {
      mp.add('foo1', 1);
      mp.add('foo2', 2);
      mp.add('foo3', 3);
      expect(mp.values('bar')).deep.equal([1, 2, 3]);
    });
  });

  describe('#values()', function() {
    it('should be a function', function() {
      expect(mp.values).to.be.a('function');
    });
    it('should return list of presented values', function() {
      mp.add('foo1', 1);
      mp.add('foo2', 2);
      mp.add('foo3', 3);
      expect(mp.values('bar')).deep.equal([1, 2, 3]);
    });
  });

  describe('#size()', function() {
    it('should be a function', function() {
      expect(mp.size).to.be.a('function');
    });
    it('should return collection size', function() {
      mp.add('foo1', 1);
      mp.add('foo2', 2);
      mp.add('foo3', 3);
      expect(mp.size()).equal(3);
    });
  });

  describe('#clear()', function() {
    it('should be a function', function() {
      expect(mp.clear).to.be.a('function');
    });
    it('should clear collection', function() {
      mp.add('foo1', 1);
      mp.add('foo3', 3);
      mp.clear();
      expect(mp.size()).equal(0);
    });
  });
});
