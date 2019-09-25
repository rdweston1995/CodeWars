//Passing a number to the isSquare function to see if the sqrt of the number is a perfect square (whole number) i.e. sqrt(25) = 5
function isSquare(n){
    return Number.isInteger(Math.sqrt(n));
}