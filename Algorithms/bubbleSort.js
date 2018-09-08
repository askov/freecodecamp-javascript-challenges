/**
* The most basic version of bubble sort O(n^2). Modifies arg
* @param {Array} array Array to sort
* @returns {Array} Sorted array
*/
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j - 1] > array[j]) {
        let x = array[j - 1];
        array[j - 1] = array[j];
        array[j] = x;
      }
    }
  }
  return array;
}
