// console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]));
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]));

//pos: [3,7]
//peaks: [6, 3]

function pickPeaks(arr) {
    let pos = [], peaks = [];

    let repeat = 0;

    if(arr.length >= 3) {
        for(let i = 1; i < arr.length - 1; i++) {
            if(arr[i] > arr[i - 1]) {
                if(arr[i] > arr[i  + 1]){
                    pos.push(i);
                    peaks.push(arr[i]);
                } else if(arr[i] === arr[i + 1]){
                    repeat = i;
                    while(arr[i] === arr[repeat]) {
                        repeat++;
                    }
                    if(arr[i] > arr[repeat]){
                        pos.push(i);
                        peaks.push(arr[i]);
                    }
                }
            } 
        }
    }

    return {pos, peaks};
}