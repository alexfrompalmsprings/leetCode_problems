/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var middleNode = function(head) {
  var middle;

  if(head.length % 2 === 1){
    middle= Math.floor(head.length / 2)
    console.log('this node is odd;', head[middle]);
  } else {
    middle = head.length / 2;
    console.log('this node is even;', head[middle]);
  }
  return head.slice(middle)
};

var example = [1,2,3,4,5]
var test = middleNode(example);
console.log(test);