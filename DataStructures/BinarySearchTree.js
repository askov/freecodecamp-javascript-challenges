var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.findMin = function() {
    if (!this.root) return null;
    let el = this.root;
    while (el.left) {
      el = el.left;
    }
    return el.value;
  }
  this.findMax = function() {
    if (!this.root) return null;
    let el = this.root;
    while (el.right) {
      el = el.right;
    }
    return el.value;
  }

  this.add = function(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let el = this.root;

    while (true) {
      if (value < el.value) {
        if (el.left) {
          el = el.left;
        } else {
          el.left = new Node(value);
          return;
        }
      } else if (value > el.value) {
        if (el.right) {
          el = el.right;
        } else {
          el.right = new Node(value);
          return;
        }
      } else {
        return null;
      }
    }
  }

  this.isPresent = function(value) {
    let el = this.root;
    while (el) {
      if (value < el.value) {
        el = el.left;
      } else if (value > el.value) {
        el = el.right;
      } else {
        return true;
      }
    }
    console.log('#el', el);
    return false;
  }

  this.findMinHeight = function() {

  }

  this.findMaxHeight = function() {
    const fh = (el) => {
      if (el === null) {
        return -1;
      }
      return Math.max(fh(el.left), fh(el.right)) + 1;
    }
    return fh(this.root);
  }

  this.isBalanced = function() {

  }

  // change code above this line
}

let bst = new BinarySearchTree();
bst.add(8);
bst.add(3);
bst.add(3);
bst.add(12);
bst.add(12);
console.log(bst.isPresent(11));
// bst.add(15);
// bst.add(1);
// bst.add(1);

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// displayTree(bst.root);
