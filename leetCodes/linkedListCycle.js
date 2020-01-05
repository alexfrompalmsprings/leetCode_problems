/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  // first conditional statement
  if (head === null || head.next === null) {
    return false;
  };


  //make your two pointers
  var rabbit = head.next;
  var turtle = head;

  // while loop to move the nodes
  while (turtle !== rabbit ) {
    // if there's room to move around
    if (rabbit === null || rabbit.next === null) {
      return false;
    }
    //keep moving them
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }
  return true;
};