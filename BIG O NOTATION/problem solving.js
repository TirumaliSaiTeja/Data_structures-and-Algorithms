/*function charCount(str){
    var solve = {};
    
    for(i=0; i<str.length; i++){
        var char = str[i].toLowerCase();
        if(solve[char]>0){
            solve[char]++;
        }
        else{
            solve[char]=1
        }
    }
    return solve;
}*/

// character count in another way

function charCount(str){
    var result = {};
    for(var char of str){
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            result[char] = ++result[char]||1;
        }
    }

    return result;
}


function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(
        !(code>47&&code<58)&&
        !(code>64&&code<91)&&
        !(code>96&&code<123)
    )
    {
        return false;
    }
    return true;
}