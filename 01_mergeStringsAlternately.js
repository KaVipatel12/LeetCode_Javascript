function mergeAlternately(word1, word2) {
  let result = '';
  let i = 0, j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  return result;
}

// Example usage:
console.log(mergeAlternately("abc", "pqr"));     
console.log(mergeAlternately("ab", "pqrs"));      
console.log(mergeAlternately("abcd", "pq"));      
