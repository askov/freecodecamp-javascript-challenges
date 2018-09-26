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
  };
  this.findMax = function() {
    if (!this.root) return null;
    let el = this.root;
    while (el.right) {
      el = el.right;
    }
    return el.value;
  };

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
  };

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
    return false;
  };

  this.findMinHeight = function() {
    const fh = (el) => {
      if (el === null) {
        return -1;
      }
      return Math.min(fh(el.left), fh(el.right)) + 1;
    };
    return fh(this.root);
  };

  this.findMaxHeight = function() {
    const fh = (el) => {
      if (el === null) {
        return -1;
      }
      return Math.max(fh(el.left), fh(el.right)) + 1;
    };
    return fh(this.root);
  };

  this.isBalanced = function() {
    return (this.findMaxHeight() - this.findMinHeight()) <= 1;
  };

  this.preorder = function() {
    if (!this.root) return null;
    const preorder = (el, arr) => {
      if (!el) return;
      arr.push(el.value);
      preorder(el.left, arr);
      preorder(el.right, arr);
    };
    let arr = [];
    preorder(this.root, arr);
    return arr;
  };

  this.inorder = function() {
    if (!this.root) return null;
    const inorder = (el, arr) => {
      if (!el) return;
      inorder(el.left, arr);
      arr.push(el.value);
      inorder(el.right, arr);
    };
    let arr = [];
    inorder(this.root, arr);
    return arr;
  };

  this.postorder = function() {
    if (!this.root) return null;
    const postorder = (el, arr) => {
      if (!el) return;
      postorder(el.left, arr);
      postorder(el.right, arr);
      arr.push(el.value);
    };
    let arr = [];
    postorder(this.root, arr);
    return arr;
  };

  this.levelOrder = function() {
    let queue = [];
    let collection = [];
    if (!this.root) return null;
    queue.push(this.root);
    while (queue.length) {
      const front = queue[0];
      if (front.left !== null) queue.push(front.left);
      if (front.right !== null) queue.push(front.right);
      collection.push(queue.shift().value);
    }
    return collection;
  };

  this.reverseLevelOrder = function() {
    let queue = [];
    let collection = [];
    if (!this.root) return null;
    queue.push(this.root);
    while (queue.length) {
      const front = queue[0];
      if (front.right !== null) queue.push(front.right);
      if (front.left !== null) queue.push(front.left);
      collection.push(queue.shift().value);
    }
    return collection;
  };

  this.remove = function(value) {
    const findNode = (root, parent, direction) => {
      if (!root) return null;
      if (root.value === value) {
        return {
          parent: parent,
          node: root,
          direction: direction
        };
      }
      parent = root;
      if (value < root.value) {
        return findNode(root.left, parent, 'left');
      }
      if (value > root.value) {
        return findNode(root.right, parent, 'right');
      }
    };
    const res = findNode(this.root);
    if (!res) {
      return null;
    }
    if (!res.node.left && !res.node.right) {
      if (!res.parent) {
        this.root = null;
      } else {
        res.parent[res.direction] = null;
      }
    }
    if (res.node.left && !res.node.right) {
      if (!res.parent) {
        this.root = res.node.left;
      } else {
        res.parent[res.direction] = res.node.left;
      }
    }
    if (!res.node.left && res.node.right) {
      if (!res.parent) {
        this.root = res.node.right;
      } else {
        res.parent[res.direction] = res.node.right;
      }
    }
    if (res.node.left && res.node.right) {
      let rmin = res.node.right,
        rparent = res.node.right;
      while (rmin.left) {
        rparent = rmin;
        rmin = rmin.left;
      }
      res.node.value = rmin.value;
      if (!rmin.left && !rmin.right) {
        res.node.right = null;
      } else if (!rmin.right) {
        rparent.left = null;
      } else {
        rparent.left = rmin.right;
      }
    }
  };

  this.invert = function() {
    if (!this.root) return null;
    const invert = (el) => {
      if (!el) return;
      const tmp = el.left;
      el.left = el.right;
      el.right = tmp;
      invert(el.left);
      invert(el.right);
    };
    invert(this.root);
  };
}


let bst = new BinarySearchTree();

bst.add(8);
bst.add(4);
bst.add(12);
bst.add(11);
// bst.add(2);
// bst.add(6);
// bst.add(10);
// bst.add(14);

// bst.add(11);
// bst.add(3);
// bst.add(12);
// bst.add(2);
// bst.add(4);

// bst.add(8);
// bst.add(3);
// bst.add(12);
// bst.add(2);
// bst.add(4);


// console.log(bst.levelOrder());
// console.log(bst.reverseLevelOrder());
// console.log('#preorder', bst.preorder());
// console.log('#inorder', bst.inorder());
// console.log('#postorder', bst.postorder());

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));


// bst.remove(222);
// bst.remove(2);
// bst.remove(4);
// bst.remove(8);
// bst.remove(12);
// bst.remove(8);
bst.invert();

displayTree(bst.root);
