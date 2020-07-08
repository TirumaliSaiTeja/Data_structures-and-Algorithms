// Recursive Range

// write a function called recurciveRange which accepts a number and
// adds up all numbers from 0 to the number passed to the function

// Sample Input/Output

// recursiveRange(6) // 21

function recursiveRange(x) {
  if (x === 0) return 0
  return x + recursiveRange(x - 1)
}
