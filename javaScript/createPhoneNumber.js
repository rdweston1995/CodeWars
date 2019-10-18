function createPhoneNumber(arr){
    if(arr.length != 10){
        return "Not a phone number";
    } else {
        return "(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + " - " + arr[6] + arr[7] + arr[8] + arr[9];  
    }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 2, 3, 4]));

// export default createPhoneNumber;

// export function createPhoneNumber(arr){
//     if(arr.length != 10){
//         return "Not a phone number";
//     } else {
//         return "(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + " - " + arr[6] + arr[7] + arr[8] + arr[9];
//     }
// }