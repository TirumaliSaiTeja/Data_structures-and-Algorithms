function sumRange(num) {
  // here we check for base case
  if (num === 1) return 1;
  // the sum will store in the sumRange
  // ex: return 3 + sumRange(3-1)
  // return 3 + sumRange(2)
  // here we check for sumRange(2)
  // if the num is equal to 1 then we return 1
  // at last, we will approach a base case
  // then we return the total value
  return num + sumRange(num - 1);
}

// What is recursion

// A process (a function in our case) that calls itself

// Why should i know?
// Its everywhere
// json.parse/json.stringify








