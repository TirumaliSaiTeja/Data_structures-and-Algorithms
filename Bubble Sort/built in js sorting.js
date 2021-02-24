// Built in javascript sorting

// Telling javascript how to do sorting

// The built-in sort method accepts an optional comparator function
// You can use this comparator function to tell javascript how you
// want it to sort
// The comparator looks at pairs of elements (a and b), determines their sort
// order based on the return value:

// if it returns a negative number, a should come before b
// if it return a positive number, a should come after b
// if it returns 0, a and b are the same as far as the sort is concerned

// Number Compare

// function numberCompare(num1, num2){
//     return num1-num2;
// }

// [6,4,34,44,65].sort(numberCompare);

// String Compare

// function compareByLen(str1, str2) {
//   return str1.length - str2.length;
// }

// ['sai', 'teja', 'tirumali'].sort(compareByLen)
