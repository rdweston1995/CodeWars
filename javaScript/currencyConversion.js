
const CONVERSION_RATES = {
    "Argentinian Peso" : 10,
    "Armenian Dram" : 478,
    "Bangladeshi Taka" : 1010010,
    "Croatian Kuna" : 110,
    "Czech Koruna" : 10101,
    "Dominican Peso" : 110000,
    "Egyptian Pound" : 18,
    "Guatemalan Quetzal" : 111,
    "Haitian Gourde" : 1000000,
    "Indian Rupee" : 63,
    "Japanese Yen" : 1101111,
    "Kenyan Shilling" : 1100110,
    "Nicaraguan Cordoba" : 11111,
    "Norwegian Krone" : 1000,
    "Philippine Piso" : 110010,
    "Romanian Leu" : 100,
    "Samoan Tala" : 11,
    "South Korean Won" : 10000100011,
    "Thai Baht" : 100000,
    "Uzbekistani Som" : 8333,
    "Venezuelan Bolivar" : 1010,
    "Vietnamese Dong" : 101100000101101
}

// console.log(converMyDollars(7, "Armenian Dram"));
console.log(convertMyDollars(25, "Bangladeshi Taka"));

function convertMyDollars(usd, currency) {
    if(currency[0] === "B" || currency[0] === "C" || currency[0] === "D" || currency[0] === "J" || currency[0] === "T" || currency[0] === "V"){
        let binaryInt = [], currencyArr = CONVERSION_RATES[currency].toString().split("");
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        for(let i = 0; i < currencyArr.length; i++) {
            binaryInt.push(currencyArr[i] * Math.pow(2, (currencyArr.length - 1) - i));
        }
        return "You now have " + (usd * binaryInt.reduce(reducer)) + " of " + currency + ".";
    } else {
        return "You now have " + (usd * CONVERSION_RATES[currency]) + " of " + currency + ".";
    }
}