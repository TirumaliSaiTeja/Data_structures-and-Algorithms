// counting the values and printing

// normal way

function countDown(num) {
  // here we are itterating the loop
  for (var i = num; i > 0; i--) {
    // printing values of i
    console.log(i);
  }
  // if the loop fails its come out of the loop
  console.log("All Done");
}

countDown(6);

// using resurceive function

function countDown(num) {
  // we check the condition is true or false
  if (num <= 0) {
    // we print our output if it satisfies the condition
    console.log("All Done");
    return;
  }

  // if the condition is false, but we are printing the output
  console.log(num);
  num--;
  countDown(num);
}
