// Multiple Pointers

// Write a function called average pair. Given a sorted array of integers and a target
// avaerage, determine if there is a pair of values in the array
// where average of the pair equals the target average. There may
// be more than one pair that matches the average target

// Bonus constraints:
// Time: O(N)
// Space: O(1)

// Sample Inputs:
// averagePair([1,2,3], 2)

// we are defining average pair with array and a number

function averagePair(arr, num) {
  var start = 0
  var end = arr.length - 1
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) {
      return true
    } else if (avg < num) {
      start++
    } else {
      end--
    }
  }
  return false
}
