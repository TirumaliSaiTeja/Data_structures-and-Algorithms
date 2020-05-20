var now = require("performance-now");

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = now();
addUpTo(10000000);
let t2 = now();
console.log(`Time taken is ${Math.abs((t2 - t1) / 1000)} seconds`);
