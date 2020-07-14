// Merge Sort

// It's a combination of two things- merging and sorting
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements
// then building up a newly sorted array

// How a merge sort works?

// It splits the array into each separate individual array
// At last, its sorts and merger's the individual array to form a actual array

// Here it is the actual array
// Step 1: [4,5,3,2,7,9,18,13,34,23,43,20]
// here we split array half
// Step 2: [4,5,3,2,7,9]  [18,13,34,23,43,20]
// here we split the first of the array, into half
// Step 3: [4,5] [3,2] [7,9] [18,13] [34,23] [43,20]
// Step 4: [2,3,4,5,7,9] [13,18,20,23,34,43]
// here we sort the array
// Step 5: [2,3,4,5,7,9,13,18,20,23,34,43]
