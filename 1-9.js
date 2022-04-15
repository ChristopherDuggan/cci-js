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

We can quickly return false if we hit a few conditions:
-   if s1 or s2 is empty
-   if s2 is longer than s1
*/


function isSubString(s1, s2) {
    let match = false;
    if (s1.length < 1 
        || s2.length < 1
        || s2.length > s1.length) return match;

    for (let i = 0; i < s1.length; i++) {

        /* if you hit a character that matches the first letter of s2, set match
        to true. Switch it back to false if the subsequent letters in s1 don't
        match the rest of s2 */
        if (s1.charAt(i) === s2.charAt(0)) {
            match = true
            for (let j = 0; j < s2.length; j++) {
               if (s1.charAt(i+j) !== s2.charAt(j)) match = false;
            }
        }
    }
    return match

}

//console.log(isSubString('hbedabc123', 'abc'));


