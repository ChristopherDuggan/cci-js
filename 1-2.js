/* Given two strings, write a method to decide if one is a permutation of the
 * other.
 */

/* we can use a hash table to track the number of occurrances of a particular
 * character in the first string, then subtract from that number each time a
 * character shows up in the second string. If we hit -1 on a character, we know
 * that there is a disparity between the amount in string 1 and string 2
 */

function isPermutation(str1, str2) {
  // if the strings are of different lengths, they cannot be permutations
  if (str1.length != str2.length) return false;

  let countArray = [];

  for (i = 0; i < str1.length; i++) {
    if (countArray[str1.charCodeAt(i)] === undefined) countArray[str1.charCodeAt(i)] = 0;
    countArray[str1.charCodeAt(i)]++;
  }
  for (j = 0; j < str2.length; j++) {
    if (countArray[str2.charCodeAt(j)] === undefined) return false;
    countArray[str2.charCodeAt(j)]--;
    if (countArray[str2.charCodeAt(j)] < 0) return false;
  }

  return true;

}


console.log(isPermutation('hat', 'hat'));
console.log(isPermutation('hat', 'hta'));
console.log(isPermutation('hat', 'hal'));
