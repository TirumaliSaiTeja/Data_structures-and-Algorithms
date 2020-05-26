function charCount(str) {
  //creating an object
  var obj = {};
  //taking string into character
  for (var char of str) {
    //converting given string into lowercase
    char = char.toLowerCase();
    if (isAplhaNumeric(char)) {
      // here obj of char is checking two conditions
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAplhaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper case (A-Z)
    !(code > 96 && code < 123) // upper case (A-Z)
  ) {
    return false;
  }
  return true;
}
charCodeAt(0);
