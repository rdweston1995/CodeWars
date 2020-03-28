let recipe = {
    flour : 500,
    sugar : 200,
    eggs : 1
};

let available = {
    flour : 1200,
    sugar : 1200,
    eggs : 5,
    milk : 200
}

console.log(cakes(recipe, available));

function cakes(recipe, available) {
    let low = 1000;
    for(let [key, value] of Object.entries(recipe)){
        if(available[key] === undefined){return 0;}
        else {
            if((Math.floor(available[key] / recipe[key])) < low) { low = Math.floor(available[key] / recipe[key])}
        }
    }
    return low;
}