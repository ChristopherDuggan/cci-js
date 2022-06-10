/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */


// Using a Hash Table
function isUnique(str, setLength) {
  /* check the length of the string against the number of characters in the set
   * if the string has more characters  than the set (ie 129 vs ASCII's 128),
   * there must be a character repeated
   */
  if (setLength && str.length > setLength) return false;

  // create an empty array where each item represents one character in the set
  const charSet = new Array(setLength);

  // check the chars in the string against the set and return false if there's a repeat
  for (let i = 0; i < str.length; i++) {
    if (!!charSet[str.charCodeAt(i)]) return false;

    // set the character to true in the set once encountered
    if (!charSet[str.charCodeAt(i)]) {
      charSet[str.charCodeAt(i)]  = true;
    }

  }

  return true;
}

console.log('isUnique: "this word" ', isUnique('this word'));
console.log('isUnique: "this word" with charset', isUnique('this word', 1112064));
console.log('isUnique: "bats in hats"', isUnique('bats in hats'));
console.log('isUnique: "bats in hats" with charset', isUnique('bats in hats', 1112064));

// Without another data structure

function isUnique2(str, setLength) {

  if (setLength && str.length > setLength) return false;

 // we can use a nested loop to check each character against the following ones

  for (let i = 0; i < str.length; i++) {
    for (let ii = i + 1; ii < str.length; ii++) {
      if (str[i] === str[ii]) return false;
    }
  }

  return true
}

console.log('isUnique2: "this word"', isUnique2('this word'));
console.log('isUnique2: "this word" with charset', isUnique2('this word', 1112064));
console.log('isUnique2: "bats in hats"', isUnique2('bats in hats'));
console.log('isUnique2: "bats in hats" with charset', isUnique2('bats in hats', 1112064));

// Using bit manipulation (with a charset limited to a-z)
function isUnique3(str) {
  // set our checker to 0000 0000
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    // get the relative character code for a-z where a=0, b=1, etc.
    let value = str.charCodeAt(i) - 'a'.charCodeAt(0);
    /* a bit AND sees if 0000 0000 and 1, left shifted by our value is greater
     *  than 0. In other words, if the current value of the checker has a 1 in
     *  the same 'bit slot' as the value, we've got a hit
     */
    if ((checker & (1 << value)) > 0) {
      return false;
    }
    // change the checker so it adds a 1 in the 'bit slot' of the value
    checker |= (1 << value);
  }
  return true;
}

console.log('isUnique3: "thisword"', isUnique3('thisword'));
console.log('isUnique3: "batsinhats"', isUnique3('batsinhats'));
