// Write a function to generate a hashtag from a pass string parameter
// Should remove all spaces and Capitalize the first letter of every word.
// Cannot be more then 140 chars and cannot be empty

console.log("Expected: false\t\t\t\tReturned: " + generateHashtag(""));
console.log("Expected: false\t\t\t\tReturned: " + generateHashtag(" ".repeat(200)));
console.log("Expected: #DoWeHaveAHashtag\t\tReturned: " + generateHashtag("Do We have A Hashtag"));
console.log("Expected: #Codewars\t\t\tReturned: " + generateHashtag("Codewars"));
console.log("Expected: #CodewarsIsNice\t\tReturned: " + generateHashtag("Codewars is Nice"));
console.log("Expected: #CodeWars\t\t\tReturned: " + generateHashtag("code" + " ".repeat(140) + "wars"));


function generateHashtag(str) { 
    str = str.trim();
    // str = str.split(" ");
    // console.log(str.length);
    // console.log(str.length);
    if(str.length == 0) {
        return false;
    }else {
        // str = str.split(" ");
        // console.log(str);
        let hashTag = "#";
        for(let i = 0; i < str.length; i++) {
            // console.log(str[i].charAt(0));
            str[i] = str[i].substr(0, 1).toUpperCase() + str[i].substr(1);
            hashTag += str[i].trim();
        }

        // console.log(str);
        // console.log(hashTag);
        // console.log(hashTag);
        return hashTag;
    }
}