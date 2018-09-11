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

  this.remove = function (element) {
    // Only change code below this line
    let el = head,
      prev = null;
    while (el.element !== element && el.next) {
      prev = el;
      el = el.next;
    }
    if (!prev) {
      head = el.next;
    } else {
      prev.next = el.next;
    }
    length--;
    // Only change code above this line
  };

  this.isEmpty = function () {
    return head === null;
  };

  this.indexOf = function (element) {
    let el = head,
      cnt = 0;
    while (el.element !== element && el.next) {
      cnt++;
      el = el.next;
    }
    if (el.element !== element) {
      return -1;
    }
    return cnt;
  };
}

const ll = new LinkedList();
// console.log(ll.isEmpty());
ll.add('Cat');
// console.log(ll.isEmpty());
// ll.remove('Cat');
// console.log(ll.isEmpty());

ll.add('Dog');
ll.add('Bird');
console.log(ll.indexOf('Dog'));
// ll.add('Parrot');

// ll.remove('Bird');
// ll.remove('Parrot');
// ll.remove('Cat');
console.log(ll.head());