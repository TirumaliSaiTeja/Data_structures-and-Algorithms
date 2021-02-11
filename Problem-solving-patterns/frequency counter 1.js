// this pattern uses objects or sets to collect values/frequencies of values

// this often avoid the need for nested loops or o(n^2) 
// operations with arrays/strings


/*write a function called same, it holds two arrays. The function should return
true if every value in the array has its corresponding value squared
in the second array. The frequency of values must be the same*/

//Naive pattern

//Time Complexity- N^2

function same(arr1, arr2){
    //here we check length of two arrays
    //if length is not matched, then we return false and we come out of function
    if(arr1.length!==arr2.length){
        return false;
    }
    //if the length are matched, then we itterate over arrays
    for(let i=0; i<arr1.length; i++){
        //if the given condition is true, then it squares the array 1
        let correctIndex = arr2.indexOf(arr1[i]**2)
        // here if its don't find any correct value pair and index it will return false
        if(correctIndex === -1){
            return false;
        }
        //here it will create a new array with squared values
        arr2.splice(correctIndex,1)
    }
    return true;
}

