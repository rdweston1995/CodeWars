/**
 * Function to find the first in array arr that equal n
 */

console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0. -6]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)) // [13, -3]
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)) // [1, 1]

function sumPairs(ints, s) {
    let lowestPair = [ints.length + 1, ints.length + 1];

    for(let i = 0; i < ints.length - 1; i++) {
        for(let k = i + 1; k < ints.length; k++) {
            if((ints[i] + ints[k]) === s && i < lowestPair[0] && k < lowestPair[1]) {
                lowestPair[0] = i;
                lowestPair[1] = k;
            } else if((ints[i] + ints[k]) === s && i > lowestPair[0] && k < lowestPair[1]){ 
                lowestPair[0] = i;
                lowestPair[1] = k;
            }
        }
    }

    if (lowestPair[0] === ints.length + 1) { return undefined }
    else { return [ints[lowestPair[0]], ints[lowestPair[1]]]; }
}