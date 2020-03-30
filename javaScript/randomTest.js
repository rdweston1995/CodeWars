// for(let i = 0; i < 10; i++){
    // console.log(headsTails(10));
    // console.log(hundred());
// }

headsTails(10);

function headsTails(n){
    let totalHeads = 0, totalTails = 0;
    for(let i = 0; i < 10; i++) {
        let heads = 0, tails = 0;
        for(let i = 0; i < n; i++){
            if(getRandomInt(2) === 0){
                totalTails++;
                tails++}
            else{
                totalHeads++;
                heads++
            }
        }
        console.log(heads + "   |   " + tails);
    }
    
    console.log("\n" + totalHeads + "   |   " + totalTails);
}

function hundred(){
    let under50 = 0; over50 = 0;
    for(let i = 0; i < 100; i++) {
        if(getRandomInt(100) > 50) {over50++}
        else {under50++}
    }

    return under50 + "   |   " + over50;
}

function getRandomInt(max){
    return Math.floor(Math.random() * Math.ceil(max));
}