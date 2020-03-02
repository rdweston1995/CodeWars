// Write a function to generate a hashtag from a pass string parameter
// Should remove all spaces and Capitalize the first letter of every word.
// Cannot be more then 140 chars and cannot be empty

console.log("Expected: false\t\t\t\tReturned: " + generateHashtag(""));
console.log("Expected: false\t\t\t\tReturned: " + generateHashtag(" ".repeat(200)));
console.log("Expected: #DoWeHaveAHashtag\t\tReturned: " + generateHashtag("Do We have A Hashtag"));
// console.log("Expected: #Codewars\t\t\tReturned: " + generateHashtag("Codewars"));
// console.log("Expected: #CodewarsIsNice\t\tReturned: " + generateHashtag("Codewars is Nice"));
console.log("Expected: #CodeWars\t\t\tReturned: " + generateHashtag("code" + " ".repeat(140) + "wars"));
// console.log("Expected: #A" + "a".repeat(138) + "\t\t\tReturned: " + generateHashtag("a".repeat(139)));
// console.log("Expected: false\t\t\tReturned: " + generateHashtag("a".repeat(140)));

function generateHashtag(str) { 
    let lengthTest = str.replace(/\s+/g, '');
    if(lengthTest.length == 0 || lengthTest.length >= 140) {
        return false;
    } else {
        str = str.split(" ");
        let hashTag = "#";
        for(let i = 0; i < str.length; i++) {
            if(str[i] != ""){
                hashTag += str[i].substr(0, 1).toUpperCase() + str[i].substr(1);
            }
        }
        return hashTag;
    }
}