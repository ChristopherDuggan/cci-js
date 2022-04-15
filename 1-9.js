// String Rotation

/*
Assume you have a method isSubString which checks if one word is a substring of
another. Given two strings, s1 and s2, write code to check if s2 is a rotation
of s1 using only one call to isSubString (e.g., 'waterbottle' is a rotation of
'erbottlewat').
*/


/*
While the prompt says to assume we have the isSubString method already done,
let's make it from scratch anyway, just 'cause. 

In order to do so, we can iterate through s1, looking for a character that
matches the first character of s2. Once we hit that character, we can iterate
through the following characters on both strings and return true if they match.

*/


function isSubString(s1, s2) {
    let match = false;

    for (let i = 0; i < s1.length; i++) {

        /* if you hit a character that matches the first letter of s2, set match
        to true. Switch it back to false if the subsequent letters in s1 don't
        match the rest of s2 */
        if (s1.charAt(i) === s2.charAt(0)) {
            match = true
            for (let j = 0; j < s2.length; j++) {
               if (s1.charAt(i+j) !== s2.charAt(j)) match = false;
            }
            if (match) return match;
        }
    }
    return match

}

//console.log(isSubString('hbedabc123', 'abc'));

/*
If s2 is a rotation of s1 (waterbottle -> erbottlewat) it is the same string as
s1 but the starting character is transposed to later in the string and the exact
length is maintained by putting the characters that "overflow" the original
length at the beginning of the string (in the same order). This means that if we
concatenate s2 to itself, the original string of s1 (if it is a match) will
appear in s2. (waterbottle -> erbottle[[[waterbottle]]]wat). That means we can
take that doubled s2 and check to see if s1 is a substring of it.
*/

function isRotation(s1, s2) {
    s2 += s2
    // console.log("s2: ", s2, "s1: ", s1)
    return isSubString(s2, s1)
}

console.log(isRotation('abc', 'bcacba'));
console.log(isRotation('abcdefg', 'efgabcd'));
console.log(isRotation('abc', 'cba'));
console.log(isRotation('abc', 'cbasthaoue'));
