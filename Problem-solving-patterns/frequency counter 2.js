//Refactored Approach

//Using different loops is better than using nested loop
// nested loop will take n^2 but looping will take o(n)

// function same(arr1, arr2){
//     if(arr1.length!==arr2.length){
//         return false;
//     }

//     let frequencyCounter1 = {};
//     let frequencyCounter2= {};
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val]= (frequencyCounter2[val] ||0)+1
//     }

//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false;
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false;
//         }
//     }

//     return true;
// }


function valid(str1, str2){
    if(str1.length!==str2.length){
        return false;
    }

    const word = {};

    for(var i=0; i<str1.length; i++){
        let letter = str1[i]
        value[letter] ? value[letter]+=1 : value[letter]=1;

    }

    for(var i=0; i<str2.length; i++){
        let letter = str2[i]

        if (!value[letter]) {
            return false;
          } else {
            value[letter] -= 1;
          }
        }
      
        return true;


}