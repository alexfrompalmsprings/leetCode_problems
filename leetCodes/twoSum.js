/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  /*
  O - An array with the indices that give us the element. ie --> [0,1]

  I - An array of numbers

  C - No time constraints

  E - We might need to have more than one two numbers. It is also possible that the
      number is repeat, which does not work for us.
  */

  //1st loop over the length
  for (var i = 0; i < nums.length; i++) {
    // 2nd loop
    for (var j = i + 1; j < nums.length; j++) {
      // conditional statement to add the target
      if (nums[i] + nums[j] === target) {
        // return array
        return [i, j]
      }
    }
  }



};

var numsOne = [2, 7, 11, 15];
var targetOne = 9;

var testOne = twoSum(numsOne, targetOne)
console.log(testOne);


var numsTwo = [2, 5, 5, 8, 10];
var targetTwo = 10;

var testTwo = twoSum(numsTwo, targetTwo)
console.log(testTwo);