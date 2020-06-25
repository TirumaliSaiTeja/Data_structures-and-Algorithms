// Binary search
// Binary search is a much faster form of search
// Rather than eliminating one element at a time,
// you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays

//simplified version

function Binary(arr, val) {
  //in function we are taking a array and a value
  //defining the start, end and middle of the array
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  //checking the condition, when middle value of the array is not
  //equal to value and start value is less than equal to end of the array
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  //here we are using turnary operator
  //it will return only when middle is equal to value
  //then returns middle and if not it will return -1
  return arr[middle] === val ? middle : -1
}

//another version
function Search(arr, val) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)

    if (arr[middle] === val) {
      return middle
    }
    return -1
  }
}
