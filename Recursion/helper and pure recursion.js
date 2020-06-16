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
