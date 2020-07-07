// product of array
// Write a function called product of array, which takes in an array
// of numbers and returns the product of them all

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}
