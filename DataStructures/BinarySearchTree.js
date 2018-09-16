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
  // change code above this line
}

let bst = new BinarySearchTree();
