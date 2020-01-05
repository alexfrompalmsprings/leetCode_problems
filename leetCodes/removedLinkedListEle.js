/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


var removeElements = function(head, val) {
  var head = head;
  

  // while we have a head and a value
  while (head && head.val === val) {
      head = head.next;
  }
  if (!head) {
      return null;
  }
  var current = head;
  var previous = head;
  while (current) {
      if (current.val !== val) {
          previous = current;
          current = current.next
      } else {
          previous.next = current.next;
          current = current.next;
      }
  }
  return head
};



// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5