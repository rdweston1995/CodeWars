//Create a function that will count the letters case insensitive of a string and display them in arrays from largest to smallest.
countAndGroup("Mississippi");

function countAndGroup (str) {
    str = str.toLowerCase().split("");
    console.log(str);

    let count = {};
    for(let i = 0; i < str.length; i++){
        // console.log(count[str[i]]);
        if(count[str[i]] === undefined) {
            count[str[i]] = 1;
        } else {
            count[str[i]]++;
        }
    }

    for(let i = 0; i < count.length; i++){
        
    }
    console.log(count);
}