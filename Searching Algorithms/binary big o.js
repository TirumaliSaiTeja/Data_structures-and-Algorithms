// Naive string search

// suppose you wantss to count the number of times
// a smaller string appears in a longer string
// a straightforward apporach involves checking
// pairs of characters individually

// We are defining a function with name StringSearch

function StringSearch(long, short) {
  // we are defining count at o
  var count = 0
  // we are itterating the first string
  for (var i = 0; i < long.length; i++) {
    // inside first loop we are itterating the second string
    for (var j = 0; j < short.length; j++) {
      // here is the condition that, when short is not equal
      // to long string, then it will break
      if (short[j] !== long[i + j]) {
        break
      }
      // here is the second condition, for incrementing the count value
      // if j is equal to length of short, then it will increment count
      if (j === short.length - 1) {
        count++
      }
    }
  }
  return count
}
