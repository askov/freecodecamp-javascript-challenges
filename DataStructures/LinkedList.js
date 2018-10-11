var Node = function(element) {
  this.element = element;
  this.next = null;
};

module.exports.Node = Node;

module.exports.LinkedList = function() {
  var length = 0;
  var head = null;



  this.head = function() {
    return head;
  };

  this.size = function() {
    return length;
  };

  this.add = function(element) {
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

  this.addAt = function(index, element) {
    if (index < 0 || index > length) return false;
    let el = head,
      cnt = 0,
      prev = null;
    while (cnt < index) {
      prev = el;
      el = el.next;
      cnt++;
    }
    const tmp = new Node(element);
    if (prev) {
      tmp.next = el;
      prev.next = tmp;
    } else {
      tmp.next = head.next;
      head = tmp;
    }
    length++;
    return true;
  };

  this.remove = function(element) {
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

  this.removeAt = function(index) {
    if (index < 0 || index >= length) return null;
    length--;
    if (index === 0) {
      const tmp = head.element;
      head = head.next;
      return tmp;
    }
    let el = head,
      prev = null,
      cnt = 0;
    while (cnt < index) {
      prev = el;
      el = el.next;
      cnt++;
    }
    prev.next = el.next;
    return el.element;
  };

  this.isEmpty = function() {
    return head === null;
  };

  this.indexOf = function(element) {
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

  this.elementAt = function(index) {
    if (index < 0 || index >= length) return null;
    let el = head,
      cnt = 0;
    while (cnt < index) {
      el = el.next;
      cnt++;
    }
    return el.element;
  };
}
