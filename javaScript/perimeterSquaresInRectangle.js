/**
 * Function to find the sum of the perimeter of the squares in a rectangle
 * Takes n squares as a parameter
 */

console.log(perimeter(5));
console.log(perimeter(7));


function perimeter(n) {
    let squares = [1];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    for (let i = 0; i < n; i++) {
        if(squares.length === 1) {
            squares.push(1);
        } else {
            squares.push(squares[i] + squares[i - 1]);
        }
    }

    return 4 * squares.reduce(reducer);
}