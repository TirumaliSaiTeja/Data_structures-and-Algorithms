// Selection sort

// Similar to bubble sort, but instead of first placing
// large values into sorted position, it places small values into sorted position

// time complexity of selection sort is o(n^2).

//  compared to bubble sort, selection sort is fast
// on bubble sort, it will swap each and every value till it reaches
// the highest number in array

// In selection sort it will sort only once.

function Selection(arr) {
  // New Es,

  // const swap = (arr, ind1, ind2)=>
  // ([arr[ind1], arr[ind2] = arr[ind2], arr[ind1]]);

  // we are itterating the array
  for (var i = 0; i < arr.length; i++) {
    // assuming first index in the array as minimum value
    var min = i
    // we are checking the values, index's in the array
    for (var j = i + 1; j < arr.length; j++) {
      // checking the condition for minimum values and comparing the values
      if (arr[j] < arr[min]) {
        //if the condition satisfies, we are storing it in min variable
        min = j
      }
    }
    // condition for swaping of the values in the array
    // condition in new es
    // if(i!== min) swap(arr, i, min);
    if (i !== min) {
      var temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}
