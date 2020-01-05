/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 */
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
 */

var bubbleSort = function (array) {

  // we make two loops in order to get our numbers swapping
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {

      // conditional statement that is going to compare the the numbers
      if (array[j] > array[j + 1]) {
        console.log('This is our array at the moment:', array, 'The indexes we are looking at:', array[j], array[j + 1])

        //! this is where the magic happens; we about to use the SWAP METHOD

        var temp = array[j];
        console.log('this is the temp var', temp)
        array[j] = array[j + 1]
        array[j + 1] = temp

      }
    }
  }
  return array;
};

var test = bubbleSort([2, 1, 3, 6, 5, 4]);
console.log('final', test) // yields [1, 2, 3, 4, 5, 6]