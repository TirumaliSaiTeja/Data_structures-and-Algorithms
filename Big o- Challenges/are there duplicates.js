// Implement a function called, areThereDuplicates
// which accepts a variable number of arguments, and checks whether
// there are any duplicates among the arguments passed in.

// Restrictions:
// time - o(n)
// space- o(n)

// linear solution

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// frequency counter

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = collection[arguments[val]] || 0;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
