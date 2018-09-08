/**
 * In-place quick sort (Lomuto Partitioning). O(n log n) -> O(n^2)
 */

function quickSort(arr) {

  const swap = function (arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  const partition = function (arr, lo, hi) {
    const pivot = arr[hi];
    let l = lo;
    for (let i = lo; i < hi; i++) {
      if (arr[i] <= pivot) {
        swap(arr, i, l);
        l++;
      }
    }
    swap(arr, l, hi);
    return l;
  }

  const qSort = function (arr, lo, hi) {
    if (lo < hi) {
      const p = partition(arr, lo, hi);
      qSort(arr, lo, p - 1);
      qSort(arr, p + 1, hi);
    }
  };

  qSort(arr, 0, arr.length - 1);
}


a = [3, 2, 9, 2, 1, 10, 5, 7];
quickSort(a);
console.log('sorted', a);