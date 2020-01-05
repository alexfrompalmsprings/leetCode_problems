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


var deleteDuplicates = function (head) {
  // make a currentNode var
  var currentNode = head;
  // while loops for the nodes arent null
  while (currentNode !== null && currentNode.next !== null) {
    // lets check the vals to see if they're equal to each other
    if (currentNode.next.val === currentNode.val) {
      // equal them to the next
      currentNode.next = currentNode.next.next
    } else {

      currentNode = currentNode.next;
    }
  }
  //return it
  return head;
};