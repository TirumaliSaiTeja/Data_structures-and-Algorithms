// Binary search
// Binary search is a much faster form of search
// Rather than eliminating one element at a time,
// you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays

//simplified version

function Binary(arr, val) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === val ? middle : -1
}
