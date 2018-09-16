function merge(a1, a2) {
  let res = [],
    i1 = 0,
    i2 = 0;
  while (i1 < a1.length && i2 < a2.length) {
    if (a1[i1] < a2[i2]) {
      res.push(a1[i1]);
      i1++;
    } else {
      res.push(a2[i2]);
      i2++;
    }
  }
  return res.concat(i1 === a1.length ? a2.slice(i2) : a1.slice(i1));
}

function mergeSort(array) {
  if (array.length === 1) return array;

  const m = Math.floor(array.length / 2);
  const a1 = array.slice(0, m);
  const a2 = array.slice(m);

  return merge(mergeSort(a1), mergeSort(a2));
}

const test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(mergeSort(test));
