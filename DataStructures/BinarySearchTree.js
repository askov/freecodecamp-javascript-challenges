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
    const fh = (el) => {
      if (el === null) {
        return -1;
      }
      return Math.min(fh(el.left), fh(el.right)) + 1;
    }
    return fh(this.root);
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
    return (this.findMaxHeight() - this.findMinHeight()) <= 1;
  }

  this.preorder = function() {
    if (!this.root) return null;
    const preorder = (el, arr) => {
      if (!el) return;
      arr.push(el.value);
      preorder(el.left, arr);
      preorder(el.right, arr);
    }
    let arr = [];
    preorder(this.root, arr);
    return arr;
  }

  this.inorder = function() {
    if (!this.root) return null;
    const inorder = (el, arr) => {
      if (!el) return;
      inorder(el.left, arr);
      arr.push(el.value);
      inorder(el.right, arr);
    }
    let arr = [];
    inorder(this.root, arr);
    return arr;
  }

  this.postorder = function() {
    if (!this.root) return null;
    const postorder = (el, arr) => {
      if (!el) return;
      postorder(el.left, arr);
      postorder(el.right, arr);
      arr.push(el.value);
    }
    let arr = [];
    postorder(this.root, arr);
    return arr;
  }
}


let bst = new BinarySearchTree();
bst.add(8);
bst.add(3);
bst.add(12);
bst.add(2);
bst.add(4);

console.log('#preorder', bst.preorder());
console.log('#inorder', bst.inorder());
console.log('#postorder', bst.postorder());

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// displayTree(bst.root);
