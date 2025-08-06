var reverseWords = function(s) {
    return s.split(" ").reverse().filter(char => char.trim().length != 0).join(" "); // My logic => 2 m/s run time
    // return s.trim().split(/\s+/).reverse().join(" ");  // Chatgpt logic => 1 m/s
};