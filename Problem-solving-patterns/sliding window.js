//naive approach
//time complexity - o(n^2)

function maxSubarraySum(arr, num) {
  //here we take array and number
  if (num > arr.length) {
    //if the number is greater than array length it returns null
    return null;
  }
  var max = -Infinity;
  //here we take infinity because it will result in array of negative values
  for (let i = 0; i < arr.length - num + 1; i++) {
    //here we itterate the loop
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//Refactored Approach

//Time complexity - o(n)

function maxSubarraySum(arr, num) {
  // here we assign constant values for max sum and temp sum
  let maxSum = 0;
  let tempSum = 0;
  //here we add only first three numbers in an array and we will store them in maxSum
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  //we store maxSum into tempSum variable
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    //here we add the alternative number and delete the first number
    tempSum = tempSum - arr[i - num] + arr[i];
    //We return the number which is larger
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
