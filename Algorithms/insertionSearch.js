/**
* Insertion sort O(n^2). Modifies arg
* @param {Array} array Array to sort
* @returns {Array} Sorted array
*/
function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j > 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
