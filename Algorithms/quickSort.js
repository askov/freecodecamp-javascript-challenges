/**
* In-place quick sort (Lomuto Partitioning). O(n log n) -> O(n^2)
* @param {Array} array Array to sort
* @returns {Array} Sorted array
*/
function quickSort(array) {

  const swap = function (array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }

  const partition = function (array, lo, hi) {
    const pivot = array[hi];
    let l = lo;
    for (let i = lo; i < hi; i++) {
      if (array[i] <= pivot) {
        swap(array, i, l);
        l++;
      }
    }
    swap(array, l, hi);
    return l;
  }

  const qSort = function (array, lo, hi) {
    if (lo < hi) {
      const p = partition(array, lo, hi);
      qSort(array, lo, p - 1);
      qSort(array, p + 1, hi);
    }
  };

  qSort(array, 0, array.length - 1);
}


a = [3, 2, 9, 2, 1, 10, 5, 7];
quickSort(a);
console.log('sorted', a);
