// URLify

/* Write a method to replace all spaces in a string with "%20". You may assume
 * that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true" legth of the string.
 *
 * EXAMPLE
 * Input    "Mr John Smith    ", 13
 * Output   "Mr%20John%20Smith"
 */

 /* because we are working in js, I don't think we require the length of the
  * string since it will automatically change to fit our needs. We essentially
  * need to loop through a string and where we find the character " ", we insert
  * the three characters "%20". We could either alter the string in place or
  * create a brand new string, which would alleviate the issue of having to
  * worry about our iterator getting confused about which chararter is where.
  * Lets try the two string solution first
  */

function toURL(str) {
  let output = "";
  //get rid of excess spaces at the end of the string.
  str = str.trim();

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      output += "%20";
    } else {
      output += str.charAt(i);
    }
  }

  return output;
}

console.log(toURL("testwithnospaces"));
console.log(toURL("test with spaces"));
console.log(toURL("test with a ton of spaces at the end            "));
console.log(toURL("Mr John Smith    "));

