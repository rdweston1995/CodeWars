
// console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
// console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
// console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0"));

console.log(goodVsEvil1("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
console.log(goodVsEvil1("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
console.log(goodVsEvil1("1 0 0 0 0 0", "1 0 0 0 0 0 0"));

//First working version
function goodVsEvil(good, evil) {
    let goodArr = good.split(" ");
    let evilArr = evil.split(" ");

    let totalGood = 0;
    let totalEvil = 0;

    for(let i = 0; i < evilArr.length; i++) {
        if(i != evilArr.length - 1) {
            if(i < 3) {
                totalGood += goodArr[i] * (i + 1);
            } else if(i > 2 && i != goodArr.length - 1){
                totalGood += goodArr[i] * i;
            } else { 
                totalGood += goodArr[i] * 10;
            }
        }

        if(i > 0 && i < 4) {
            totalEvil += evilArr[i] * 2;
        } else if (i == 0) {
            totalEvil += evilArr[i] * 1;
        } else if (i == 4) {
            totalEvil += evilArr[i] * 3;
        } else if (i == 5) {
            totalEvil += evilArr[i] * 5;
        } else {
            totalEvil += evilArr[i] * 10;
        }
    }

    if(totalGood > totalEvil) {
        return "Battle Result: Good triumphs over Evil";
    } else if(totalGood < totalEvil) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
    // console.log("Total Good = " + totalGood);
    // console.log("total Evil = " + totalEvil);
    // console.log("GOOD\n" + goodArr);
    // console.log("EVIL\n" + evilArr + "\n=================");
}

function goodVsEvil1(good, evil) {
    evil = evil.split(" ");
    good = good.split(" ");
    let goodValues = [1, 2, 3, 3, 4, 10];
    let evilValues = [1, 2, 2, 2, 3, 5 , 10];

    let total = 0;

    for(let i = 0; i < evil.length; i++) {
        if(i != evil.length - 1){
            total += good[i] * goodValues[i];
        }

        total -= evil[i] * evilValues[i];
    }

    if(total > 0) {
        return "Battle Result: Good triumphs over Evil";
    } else if( total < 0) { 
        return "Battle Result: Evil eradicates all traces of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
}