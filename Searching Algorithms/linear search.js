// Javascript has search
// there are many different search methods on arrays in javascript
// indexOf, includes, find, findIndex

// Linear search

// it will start checking the entire array 

function Search(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i
    }
  }
  return -1
}
