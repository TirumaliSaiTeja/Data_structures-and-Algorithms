// Factorial

// Write a function which aceepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all
// the integers below it, eg. factorial four is equal to 24
// factorial(0!) is always 1

function factorial(num) {
  if (num < 0) return 0
  if (num <= 1) return 1
  return num * factorial(num - 1)
}
