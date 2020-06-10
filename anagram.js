function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const value = {};
  
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      // if letter exists, increment, otherwise set to 1
      value[letter] ? value[letter] += 1 : value[letter] = 1;
    }
    console.log(value)
  
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
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')