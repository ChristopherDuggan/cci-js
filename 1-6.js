// String Compression

/*
Implement a method to perform basic string compression using the counts of repeated characters. for example, the string aabcccccaaa would become a2, b1, c5, a3. If the 'compressed' string would not become smaller than the original string, your method should return the orginal string. You can assume the string has only uppercase and lowercase letters (a-z).
*/

/*
We can loop through the string and at each distinct character, check and see if the subsequent character is a match, doing a count of the total repeating characters. Once we hit a character that is not a match, we concatenate the character and its count to our compressed string, then set the initial iterator to the index of the new character. We will do the same process when we reach the end of the string.
*/

function compressString(str) {
    let compressed = ''
    let count = 0;

    // iterate through initial string
    for (let i = 0; i < str.length; i++) {
        // establish our current character
        let current = str.charAt(i);
        do {
            count++;
        } while (str.charAt(i) === str.charAt(i + count))
        

        // add the character and its repeat count to compressed
        compressed += current + count;
        i += count - 1;
        count = 0;
    }
        
    if (str.length < compressed.length) return str;
    return compressed;
}

console.log(compressString('hello'));
console.log(compressString('aabcccccaaa'));
console.log(compressString('nnnnnabCdDdDdCCCCCCC'));
