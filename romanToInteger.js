/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

var romanToInt = function (s) {
  /*
  O -  a number
  I - a string
  C - the letters not being part of the roman numerals
  E - none mentioned
  */

  var romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  var result = 0;

  for (var i = 0; s.length; i++) {
    //look at the character at the 1st index
    var currentLetter = romanNums[s.charAt(i)];
    //look at the character at the 2nd index
    var nextLetter = romanNums[s.charAt(i + 1)];

    //conditional statement to add the numbers to result
    if (nextLetter) {
      if (currentLetter >= nextLetter) {
        result += currentLetter;
      } else {
        result += (nextLetter - currentLetter);
        i++;
      }
    } else {
      result += currentLetter;
    }
  }

  return result;
};



var inputOne = "III"; //Output: 3
console.log(romanToInt('III'))

var inputTwo = "IV" //Output: 4
console.log(romanToInt(inputTwo))

var inputThree = "IX" //Output: 9
console.log(romanToInt(inputThree))

var inputFour = "MCMXCIV" //Output: 1994
console.log(romanToInt(inputFour))