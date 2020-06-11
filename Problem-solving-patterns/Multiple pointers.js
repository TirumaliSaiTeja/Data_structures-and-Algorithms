//Naive approach

//Time complexity- o(n^2)
//space complexity- o(1)

function sumZero(arr){
    // we are itterating the array
    for(var i=0; i<arr.length;i++){
        for(var j=i+1; j<arr.length; j++){
          //  here we checking a pair of numbers the resultant sum should be zero
            if(arr[i] + arr[j] === 0){
                // if the condition is satisfied, we return a pair of array
                return [arr[i], arr[j]]
            }
                    }
    }
}