//Take in a string and remove all non letters from the string
function getAlphabetPosition(string){
    // string = string.replace(/\W/g, '').toUpperCase();
    string = string.replace(/[^0-9a-z]/gi, '').toUpperCase();
    console.log(string);
    let stringPosition = "";
    
    for(index in string){
        stringPosition += (string.charCodeAt(index) - 64) + " ";
    }
    return stringPosition;
}

// console.log(getAlphabetPosition("The sunset sets at twelve o' clock."));
console.log(getAlphabetPosition("(?k5c+k3"));