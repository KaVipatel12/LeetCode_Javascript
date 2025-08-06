var reverseVowels = function(s) {
 
    const vowels = new Set([ "a" , "e" , "i" , "o" , "u", "A" , "E" , "I" , "O" , "U"]); 
    let vowelsExist = []
    let counter = 0; 
    for (let i = 0; i < s.length; i++) {
        if(vowels.has(s[i])){
            vowelsExist.push(s[i])
        }        
    }
    vowelsExist.reverse(); 
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        if(vowels.has(s[i])){
            newStr += vowelsExist[counter]
            counter++
        }else{
            newStr += s[i]
        }
    }

    return newStr
};

console.log(reverseVowels("Parle Gi"))