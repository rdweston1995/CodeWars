// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the 
// "instructions" for the development and functioning of living organisms. If you want to know more http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); 
// you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));

function DNAStrand(dna){
    let newDNA = "";
    for(let i = 0; i < dna.length; i++){
        switch(dna[i].toUpperCase){
            case "A":
                newDNA += "T";
                break;
            case "T":
                newDNA += "A";
                break;
            case "C":
                newDNA +="G";
                break;
            case "G":
                newDNA +="C";
                break;
        };
        //console.log(newDNA);
    }
    return newDNA;
}