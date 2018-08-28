/**
* The most basic version of bubble sort O(n2). Modifies arg
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

/**
* Selection sort O(n2). Modifies arg
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