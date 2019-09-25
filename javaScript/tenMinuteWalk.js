//Read directions that will take you in a loop ending where you stared.
//You have 10 minutes and walk one block in that direction in one minute
//If there are more or less then 10 directions then return false
//Only return true if you end where you started



const isValidWalk = (walk) => {
    let horizontal = 0;
    let verticle = 0;
    if(walk.length > 10 || walk.length < 10) {
        return false;
    }

    for(num in walk){
        if(walk[num] != "n" && walk[num] != "s" && walk[num] != "e" && walk[num] != "w"){
            return false;
        }

        switch(walk[num]){
            case "n":
                verticle++;
                break;
            case "e":
                horizontal++;
                break;
            case "s":
                verticle--;
                break;
            case "w":
                horizontal--;
                break;
        }
    }

    if(horizontal != 0 || verticle != 0){
        return false;
    }

    return true;

}

//Test cases
console.log("true  | " + isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log("false | " + isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log("true  | " + isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log("false | " + isValidWalk(['w']));
console.log("false | " + isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));