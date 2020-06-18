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
  // declaring empty object for collection
  let collection = {};
  for (let val in arguments) {
    // checking value in argument
    collection[arguments[val]] = collection[arguments[val]] || 0;
  }
  //condition for key value
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
