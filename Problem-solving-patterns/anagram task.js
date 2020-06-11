function validAnagram(str1, str2) {
    //here we check length pf two sords or strings
    if (str1.length !== str2.length) {
        //if length is not equal, we return false and we exit the loop
      return false;
    }

    //here we store values in a variable
  
    const value = {};

    // here we itterate over first string
  
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];

      //if the letter present it will increment or other wise it will set to 1
      
      value[letter] ? value[letter] += 1 : value[letter] = 1;
    }
    console.log(value)

    //here we itterate over second string
  
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!value[letter]) {
        return false;
      } else {
        value[letter] -= 1;
      }
    }
  
    return true;
  }
  
  