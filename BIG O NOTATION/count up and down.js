function countUpAndDown(n) {
  console.log("Going up");
  for (var i = 1; i < n; i++) {
    console.log(i);
  }
  console.log("Back Going Down");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
}
