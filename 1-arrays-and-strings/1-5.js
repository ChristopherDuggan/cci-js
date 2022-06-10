// One Away

/*
There are three types of edits that can be performed on strings: insert a
character, remove a character, or replace a character. Given two strings, write
a function to check if they are one edit (or zero edits) away.
*/

/* 
We can iterate through both strings simultaneously, keeping a count of the
differencees and adjusting our iterator's relationship to the strings to account
for strings of different lengths. If the count of differences ever exceeds one,
we return false, else return true.
*/

function isOneAway(str1, str2) {
    // immediately eliminate strings whose lengths are two characters apart
    if (Math.abs(str1.length - str2.length) > 1) return false;

    let diffCount = 0;

    if(str1.length === str2.length){
        for (let i = 0; i < str1.length; i++) {
            if(str1[i] !== str2[i]) {
                diffCount++;
                if (diffCount > 1) return false;
            }
        }
    } else {
        let longer, shorter;
        if (str1.length > str2.length) {
            longer = str1;
             shorter = str2;
        } else {
             longer = str2;
             shorter = str1;
        }
        let shift = 0;
        for(let i = 0; i < longer.length; i++) {
            if(shorter[i - shift] !== longer[i]) {
                diffCount++;
                shift = 1;
            }
            if(diffCount > 1) return false;
        }
    }
    return true;
}

console.log(isOneAway('candy', 'candy'))
console.log(isOneAway('candy', 'candu'))
console.log(isOneAway('cady', 'candy'))
console.log(isOneAway('hat', 'candy')) 
console.log(isOneAway('candy', 'candy'))
console.log(isOneAway('hello', 'hlelo'))
