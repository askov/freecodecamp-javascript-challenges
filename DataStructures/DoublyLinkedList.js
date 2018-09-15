var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function(element) {
    if (!this.head) {
      // const n = new Node(element, null);
      this.head = new Node(element, null);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(element, this.tail);
      this.tail = this.tail.next;
    }
  };
  this.remove = function(element) {
    if (!this.head) return null;

    if (this.head === this.tail && this.head.data === element) {
      this.head = null;
      this.tail = null;
      // return;
    }
    if (this.head && this.head.data === element) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    if (this.tail && this.tail.data === element) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    let el = this.head;
    while (el && el.next) {
      if (el.data === element) {
        el.next.prev = el.prev;
        el.prev.next = el.next;
      }
      el = el.next;
    }
  };

  this.reverse = function() {
    if (!this.head) return null;
    let el = this.head,
      prev = null;
    this.tail = this.head;
    while (el) {
      prev = el.prev;
      el.prev = el.next;
      el.next = prev;
      if (!el.prev) {
        this.head = el;
      }
      el = el.prev;
    }
  }

  this.printHead = function() {
    return this.head;
  };
  this.printTail = function() {
    return this.tail;
  };
  // change code above this line
};

const dl = new DoublyLinkedList();

dl.add('Cat');
dl.add('Dog');
// dl.add('Bird');
// dl.remove('Cat')
// dl.remove('Dog');
// dl.remove('Cat');
// dl.remove('Bird');
dl.reverse();
console.log(dl.printHead());
// console.log(dl.printHead());
