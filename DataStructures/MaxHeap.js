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
        sw(nodes, parentIndex)
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
  // change code above this line
};


var mh = new MaxHeap();

mh.insert(18);
console.log(mh.print());

mh.insert(19);
console.log(mh.print());

mh.insert(20);
console.log(mh.print());


mh.insert(10);
console.log(mh.print());

mh.insert(17);
console.log(mh.print());

mh.insert(11);
console.log(mh.print());

// mh.insert(11);
mh.insert(21);
console.log(mh.print());

// console.log(mh.print());
