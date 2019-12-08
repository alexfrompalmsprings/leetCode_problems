/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  /*
    I - we have a number as the input
    O - output is a boolean
    C - no time constraint
    E - edge case; negative numbers & zeros
        If x is negative, then cannot be a palindrome
        If x has zero at end and x is not the single digit 0
  */

  //negative numbers && divided by 10
  if (x < 0 || x % 10 === 0) {
    return false;
  };








};

var inputOne = -121
console.log(isPalindrome(inputOne)) //Output: true

var inputTwo = 2100
console.log(isPalindrome(inputTwo)) //Output: true

// Example 2: