function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    function bindLast(node) {
      if (node.next === null) {
        node.next = el;
        return;
      }
      bindLast(node.next);
    }
    var el = new Node(element);
    if (!head) {
      head = el;
    } else {
      bindLast(this.head());
    }
    length++;
  };
}

const ll = new LinkedList();

ll.add('Cat');
ll.add('Dog');
ll.add('Bird');
ll.add('Parrot');
console.log(ll.head());