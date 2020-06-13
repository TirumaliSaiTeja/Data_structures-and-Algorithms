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
  if (num > arr.length) {
    return null;
  }
}
