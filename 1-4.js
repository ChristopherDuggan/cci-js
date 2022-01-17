// Palindrome Permutation

/* Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase this is the same forward and
 * backwards. A permutation is a rearrangement of letters. The palindrome does
 * not need to be limited to just dictionary words. You can ignore casing and
 * non-letter characters.
 *
 * EXAMPLE
 *
 * Input:     Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 */

/* This is essentially checking to see if there is at most one character where
 * the number of times it occurs is odd.
 */

function isPalindrome(str) {

  //ignore casing
  str = str.toLowerCase();

  // we can specify the charArray size if given a specific character set;
  let charArray = [];

  // a counter for the number of characters that occur an odd number of times
  let oddCount = 0;


  for (let i = 0; i < str.length; i++) {
    // ignore non-letter characters
    if (/[a-z]/.test(str[i])) {
      // make the char hash a number
      if (charArray[str.charCodeAt(i)] === undefined) {
        charArray[str.charCodeAt(i)] = 0;
      }
      charArray[str.charCodeAt(i)]++;

      /* if number of times a character occurs is odd, increase the count. This
       * is tracked dynamically as we loop through so we only have to iterate
       * through the string once rather than creating the hash table with one
       * loop, then looping throguh the hash table again. This can save a lot of
       * time if we're using a gigantic character set.
       */
      if (charArray[str.charCodeAt(i)] % 2 === 1) {
        oddCount++;
      } else {
        oddCount--;
      }
    }
  }

  return (oddCount < 2);

}

console.log(isPalindrome("tact Coa"));
console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("aaa"));
console.log(isPalindrome("a a"));
console.log(isPalindrome("aa a"));
console.log(isPalindrome("abaa"));
console.log(isPalindrome("abbaa"));
console.log(isPalindrome("abc"));
