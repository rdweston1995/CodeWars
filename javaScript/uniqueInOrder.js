// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each 
// other and preserving the original order of elements
console.log(uniqueInOrder("AAAABBBCCDAABBB") + "\t====\t" + "AAAABBBCCDAABBB \t=\t['A', 'B', 'C', 'D', 'A', 'B']");
console.log(uniqueInOrder("ABBCcAD") + "\t=====\t" + "ABBCcAD \t=\t['A', 'B', 'C', 'c', 'A', 'D']");
console.log(uniqueInOrder([1,2,2,3,3]) + "\t=====\t" + "[1,2,2,3,3] \t=\t[1,2,3]");
console.log(uniqueInOrder([]));

function uniqueInOrder(iterable){
    if(iterable.length === 0){
        return [];
    }
    const returnArr = [];
    if((typeof iterable) === "string"){
        let newString = iterable.split("");
        returnArr.push(newString[0]);
        for(let i = 1; i < newString.length; i++){
            if(newString[i] != newString[i - 1]){
                returnArr.push(newString[i]);
            }
        }
        return returnArr;
    } else {     
        returnArr.push(iterable[0]);
        for(let i = 1; i < iterable.length; i++){
            if(iterable[i] != iterable[i - 1]){
                returnArr.push(iterable[i]);
            }
        }
        return returnArr;
    }
}

