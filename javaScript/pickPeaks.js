console.log(pickPeaks([1, 2]));

function pickPeaks(arr) {
    let peaks = {pos: [], peak: []};
    // console.log(arr.length);
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] > arr[i - 1] && arr[i] < arr[i + 1]){
            peaks.peak += arr[i];
            peaks.pos = i;
        }
    }

    return peaks;
}