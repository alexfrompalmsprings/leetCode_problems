/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?

 */

/**
 * example usage:
var test = allWordCombinations('abc');
 * console.log(test); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allWordCombinations = function (string) {
  // Your code here.
  /*
  !O --> array made out of strings with all possible combinations
  !I  -> string made out of letters
  !C  --> no constraints give
  !E  --> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  //create container
  var result = [];

  // split the string to create an array with all the letter
  var letters = string.split('');
  console.log(letters)

  // we need to create an recursive func
  var recursiveFunc = function (currentWord, index) {
    //base case ---> length of the Current Word = String
    if (currentWord.length === string.length) {
      // push the word into the result container
      result.push(currentWord)
      //end the recursive func
      return;
    }
    //creae the loop you are going to be using to go over the words
    for (var i = 0; i < letters.length; i++) {
      // use the recusrive function inside of the loop
      recursiveFunc(currentWord + letters[i], index + 1)
    }
  }

  // pass the recursive Func with and empty string && index 0
  recursiveFunc('', 0)
  //return the result container
  return result;
};

var test = allWordCombinations('abce');
console.log(test); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]