var now = require("performance-now");
function addUpTo(n) {
  let total = 0;
  for (var i = 0; i <= n; i++) {
    total = total + i;
  }
  return total;
}

let t1 = now();
addUpTo(10000000);
let t2 = now();
console.log(`Time taken is ${Math.abs((t2 - t1) / 1000)} seconds`);
