// sum of array

function sum(arr) {
  let total = 0;
  for (var i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// double the arrays

function double(arr) {
  let total = [];
  for (var i = 0; i <= arr.length; i++) {
    total.push(2 * arr[i]);
  }
  return total;
}
