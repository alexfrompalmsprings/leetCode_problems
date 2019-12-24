/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // make the array flat
  var flatten = matrix.flat(matrix.length);

  // long loop way to do things
  for(var i = 0; i < flatten.length; i++){
    console.log(flatten[i])
    if(flatten[i]=== target){
      return true;
    }
  }
  return false;
};

var matrixTest = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

var targetTest = 14;
var test = searchMatrix(matrixTest, targetTest);
console.log(test);