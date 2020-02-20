
goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1");
goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0");
goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0");

function goodVsEvil(good, evil) {
    let goodArr = good.split(" ");
    let evilArr = evil.split(" ");
    console.log("GOOD\n" + goodArr);
    console.log("EVIL\n" + evilArr + "\n=================");
}