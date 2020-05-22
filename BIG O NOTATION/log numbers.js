// logAtLeast.js

// As O(n) increases simultaneously time also increases

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// logAtMost.js
// As O(n) increases time remains constant

function logAtLeast5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
