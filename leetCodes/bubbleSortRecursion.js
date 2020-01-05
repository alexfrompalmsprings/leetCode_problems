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

var bubbleSortRecursive = function (array) {
  //create an inner var
  var swapped;

  for (var i = 0; i < array.length; i++) {
    //declare the currents
    var current = array[i];
    var currentIdx = i;

    //declare the nexts
    var next = array[i + 1];
    var nextIdx = i +1;

    //conditional statement that runs while the current is greater than next
    if (current > next) {
      console.log('this the array at this moment',array)

      //! SWAP MAGIC!!!

      //create a temp var to swap
      var temp = current;
      // console.log('current ----->',current)
      array[currentIdx] = next;
      array[nextIdx] = temp;

      // declare the swapped true
      swapped = true
    }
  }

  // !lets make the recursion happen!!
  if(swapped === true){
    bubbleSortRecursive(array)
  } else {
    console.log('the array was sorted bro!!')
  }

  //other wise we return it as it is
  return array

  // return swapped ? bubbleSortRecursive(array): array;

};

var test = bubbleSortRecursive([2, 1, 3, 6, 5, 4]);
console.log('final', test) // yields [1, 2, 3, 4, 5, 6]

var testSorted = bubbleSortRecursive([1, 2, 3, 4, 5, 6]);
console.log('final', test) // yields [1, 2, 3, 4, 5, 6]