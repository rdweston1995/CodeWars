/**
 * Function to find the first in array arr that equal n
 */

// console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
// console.log(sumPairs([0, 0, -2 , 3], 2)); // undefined
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

function sumPairs(ints, s) {
    let pairs = [];

    for(let i = 0; i < ints.length - 1; i++) {
        if(ints[i] < s) {
            for(let k = i + 1; k < ints.length; k++) {
                if((arr[i] + arr[k]) === s) {
                    pairs.push({pair: [ints[i], ints[k]], indices: [i, k]});
                }
            }
        }
    }
    let lowestPair = [ints.length, ints.length];
    if(pairs.length === 0) {
        return undefined
    } 
    for(let i = 0; i < pairs.length; i++) {
        if((pairs[i].indices[0] > lowestPair[0]) && (pairs[i].indices[1] < lowestPair[1])){
            lowestPair[0] = pairs[i].pair[0];
            lowestPair[1] = pairs[i].pair[1];
        } else if((pairs[i].indices[0] < lowestPair[0]) && (pairs[i].indices[1] < lowestPair[1])) {
            lowestPair[0] = pairs[i].pair[0];
            lowestPair[1] = pairs[i].pair[1];
        }
    }
    return lowestPair;
}