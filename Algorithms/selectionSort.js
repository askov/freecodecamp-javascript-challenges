/**
* Selection sort O(n^2). Modifies arg
* @param {Array} array Array to sort
* @returns {Array} Sorted array
*/
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minElIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minElIndex]) {
        minElIndex = j;
      }
    }
    if (minElIndex !== i) {
      let x = array[i];
      array[i] = array[minElIndex];
      array[minElIndex] = x;
    }
  }
  return array;
}
