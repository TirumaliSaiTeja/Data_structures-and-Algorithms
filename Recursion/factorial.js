// Factorial Itterative

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total = total * i;
  }
  return total;
}

// factorial recursively

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
