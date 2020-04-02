/**
 * Make a function to convert a string paramter to rot13
 */

console.log(rot13("EBG13 rknzcyr."));

 function rot13(str) {
     let rtnStr = "";
     for(let i = 0; i < str.length; i++){
         console.log(str.charCodeAt(i));
         if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=77) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <=109)) {
             rtnStr += String.fromCharCode(str.charCodeAt(i) + 13);
         } else if((str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122)) {
            rtnStr += String.fromCharCode(str.charCodeAt(i) - 13);
         } else {
             rtnStr += str[i];
         }
     }

     return rtnStr;
 }