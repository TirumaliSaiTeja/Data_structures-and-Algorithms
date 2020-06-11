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

// Refactored Approach
//Time complexity- o(n)
//space complexity- o(1)

function sumZero(arr){

    //We define position of variables
    let left = 0;
    let right = arr.length -1;
    while(left<right){
        //We are declaring the sum of two arrays
        let sum = arr[left] + arr[right];
        //if the sum is equal to zero then we return a pair of values
        if(sum===0){
            return [arr[left], arr[right]];
        }
        //if sum is greater than zero, then the array of pointers from right side will reduce by 1
        else if (sum>0){
            right--;
        }
        else{
            //if the above condition fails, here it array of pointers from left side will increament
            left++;
        }
    }
}
