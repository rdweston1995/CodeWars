/**
 * Function takes one number and finds the sum of the digits and then takes the digital root
 * i.e.
 * digital_root(942)
 * => 9 + 4 + 2
 * => 15
 * => 1 + 5
 * => 6
 */

console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2


function digital_root(n) {
    if(n < 10){return n}
    else {
        let nArray = (""+n).split("").map(function(t){return parseInt(t)});
        let sum = nArray.reduce((a, b) => a + b, 0);
        return digital_root(sum);
    }
}