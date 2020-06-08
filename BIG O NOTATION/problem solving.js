function charCount(str){
    var solve = {};
    
    for(i=0; i<str.length; i++){
        var char = str[i];
        if(solve[char]>0){
            solve[char]++;
        }
        else{
            solve[char]=1
        }
    }
    return solve;
}