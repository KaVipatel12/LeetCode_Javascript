var compress = function(chars) {
    let write = 0; 
    let count = 1; 

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            chars[write++] = chars[i];
            if (count > 1) {
                const countStr = String(count);
                for (let ch of countStr) {
                    chars[write++] = ch;
                }
            }

            count = 1;
        }
    }
    return write;
};

console.log(compress(["a", "a" , "a" ,"b","b","c","c","c", "c", "c","c","c","c","c","c"])); 
