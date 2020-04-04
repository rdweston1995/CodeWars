/**
 * Function to find the first in array arr that equal n
 */

// sumPairs([11, 3, 7, 5], 10);
// sumPairs([4, 3, 2, 3, 4], 6);
// sumPairs([0, 0, -2 , 3], 2);
sumPairs([10, 5, 2, 3, 7, 5], 10);

function sumPairs(arr, n) {
    let pairs = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < n) {
            for(let k = i + 1; k < arr.length; k++) {
                if((arr[i] + arr[k]) === n) {
                    // pairs.push(arr[i], arr[k]);
                    pairs.push({pair: [arr[i], arr[k]], indices: [i, k]});
                }
            }
        }
    }

    console.log(pairs);

}