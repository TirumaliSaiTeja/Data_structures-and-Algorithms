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
  // here the we are declaring the start and end
  var start = 0
  var end = arr.length - 1
  while (start < end) {
    // we are calculating the average of start and end
    let avg = (arr[start] + arr[end]) / 2
    // if the average is equal to number then it returns true
    if (avg === num) {
      return true
      // if the avg is less than the number, it will increment start
    } else if (avg < num) {
      start++
      // otherwise it will decrement the end pointer
    } else {
      end--
    }
  }
  //if everything, fails it will return false
  return false
}
