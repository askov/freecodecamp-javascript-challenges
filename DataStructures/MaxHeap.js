var MaxHeap = function() {
  // change code below this line
  this.nodes = [];
  this.insert = function(value) {
    const sw = (nodes, index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if ((nodes[index] > nodes[parentIndex])) {
        const tmp = nodes[index];
        nodes[index] = nodes[parentIndex];
        nodes[parentIndex] = tmp;
        sw(nodes, parentIndex);
      } else {
        return;
      }
    };

    this.nodes.push(value);
    sw(this.nodes, this.nodes.length - 1);
  };

  this.print = function() {
    return this.nodes;
  };

  this.remove = function() {
    const sw = (nodes, index) => {
      const lci = 2 * index + 1,
        rci = 2 * (index + 1);
      if (lci > nodes.length - 1) {
        return;
      }
      const lc = nodes[lci],
        rc = nodes[rci];
      let swi;
      if (lc && !rc) {
        swi = lci;
      } else if (rc && !lc) {
        swi = rci;
      } else {
        swi = lc > rc ? lci : rci;
      }
      if (nodes[swi] > nodes[index]) {
        const tmp = nodes[swi];
        nodes[swi] = nodes[index];
        nodes[index] = tmp;
      }
      sw(nodes, swi);
    };

    const root = this.nodes.shift(),
      last = this.nodes.pop();
    this.nodes.unshift(last);
    sw(this.nodes, 0);
    return root;
  };
  // change code above this line
};


var mh = new MaxHeap();

mh.insert(18);
// console.log(mh.print());

mh.insert(19);
// console.log(mh.print());

mh.insert(20);
// console.log(mh.print());


mh.insert(10);
// console.log(mh.print());

mh.insert(17);
// console.log(mh.print());

mh.insert(11);
// console.log(mh.print());

// mh.insert(11);
mh.insert(21);

mh.remove();
console.log(mh.print());

// console.log(mh.print());
