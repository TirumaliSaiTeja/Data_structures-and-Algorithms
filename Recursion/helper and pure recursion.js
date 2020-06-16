//Helper recursion

function collectOddvalues(arr) {
  //here we want to collect all odd calues into an array
  let result = [];
  // we take an empty array with name result

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    // if the helper input is divided by 2 and we the resultant value is not eual to zero then we push the helper input
    // push add items into an array
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // here we return selected items into new array
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// Pure Recursion

function collectOddvalues(arr) {
  let newArr = [];

  if (arr.length === 1) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddvalues(arr.slice(1)));
  return newArr;
}

// Tips

// 1. for arrays, use methods like slice, the spread
// operator, and concat that make copies of arrays so
// you do not mutate them

// 2. Remember that strings are immutable so you will
// need to use methods like slice, substr, or substring to make copies of strings

//3. To make copies of objects use object.assign or the spread operator
