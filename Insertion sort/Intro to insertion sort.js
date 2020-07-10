// Insertion sort***

// Build up the sort by gradually creating a larger left half which is always sorted

// time complexity o(n^2)
function insertion(arr) {
  for (var i = 1; i < arr.length; i++) {
    var presentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
      console.log(arr)
    }
    arr[j + 1] = currentVal
  }
  return arr
}
