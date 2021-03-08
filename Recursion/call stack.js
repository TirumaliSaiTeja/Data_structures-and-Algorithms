// in almost all program languages, there is a built
// in data structure that manages what happens when functions are invoked
// the method is called call stack

// its a stack data structures- we'll talk about that later
// any time a function is invoked it is placed (pushed) on the
// top of the call stack
// when javascript sees the return keyword or when the function
// ends, the complier will remove(pop).

// Example of call stack

//Recursion function

// Recursion is a process of calling itself. A function that
// calls itself is called a recursive function.



function takeShower() {
  return "Showering";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["idli", "Dosa", "Upma"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go out");
}

wakeUp();

// you are used to functions being pushed on the call stack
// and popped off when they are done
// When we write recursive functions, we keep pushing new functions onto the call stack


// syntax

// function recurse() {
  // function code
  // recurse();
  // function code
//}

// a recursive function must have a condition to stop calling
// itself. Otherwise, the function is called indefinitely.


