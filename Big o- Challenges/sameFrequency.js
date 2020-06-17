// write a function called sameFrequency.
// Given two positive integers, find out if the two numbers
// have the same frequency of digits

// time : o(n)

function sameFrequency(num1, num2) {
  //we are converting numbers into strings
  var strNum1 = num1.toString();
  var strNum2 = num2.toString();
  // we are checking length of two numbers
  if (strNum1.length !== strNum2.length) return false;

  // declaring empty objects
  let countNum1 = {};
  let countNum2 = {};

  // itterating number 1

  for (var i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  // itterating number 2

  for (var j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum1[j]] || 0) + 1;
  }

  // checking for key value

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
