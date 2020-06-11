function countUnique(arr){

    if(arr.length === 0){
        return 0;
    }

    // we set initial value of i to 0
    var i = 0;

    // we itterate j in the array
    for(let j=1; j<arr.length; j++){
        // if i is not equal to j, then we increment i
        if(arr[i]!==arr[j]){
            i++;

            arr[i]=arr[j]
        }
    }

    return i+1;
}