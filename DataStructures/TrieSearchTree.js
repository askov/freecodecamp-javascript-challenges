'use strict';

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  this.root = new Node();

  this.add = function(word) {
    if (!word) return null;
    let el = this.root;
    for (var l of word) {
      if (!el.keys.has(l)) {
        el.keys.set(l, new Node());
      }
      el = el.keys.get(l);
    }
    el.setEnd();
  };

  this.isWord = function(word) {
    if (!word) return false;
    let el = this.root;
    for (var l of word) {
      if (!el.keys.has(l)) {
        return false;
      } else {
        el = el.keys.get(l);
      }
    }
    return el.isEnd();
  };


  this.print = function() {
    const words = [];
    const addWord = (el, word = '') => {
      if (el.isEnd()) {
        words.push(word);
      }
      for (let [key, value] of el.keys.entries()) {
        addWord(value, word + key);
      }

    };
    addWord(this.root, '');
    return words;
  };
  // change code above this line

};


const t = new Trie();

t.add('code');
t.add('cod');
t.add('pink');
t.add('pin');

// console.log(t.isWord('pin'));

t.print();
