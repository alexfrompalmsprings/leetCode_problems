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

/*
! the method below is the best way to solve the problem:
! two pointers: Slow pointer and a Fast pointer
! the trick is right here -->
!WHEN FAST REACHES THE END OF THE LIST
! SLOW MUST BE IN THE IN THE MIDDLE
*/


var middleNode = function (head) {
  //our usual pointers
  var fast = head;
  var slow = head;

  //create the loop to help our nodes move
  while(fast && fast.next){
      // assign them their speed
      slow = slow.next;
      fast = fast.next.next;
  }
  //return the slow since it reached the middle
  return slow;
}

var example = [1, 2, 3, 4, 5]
var test = middleNode(example);
console.log(test);