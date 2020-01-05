/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Input: 1->2->2->1
// Output: true


var isPalindrome = function (head) {
  /*
  1st idea.
  make two pointers
  */


  // need to know the len of the list
  // if the list is odd we should be get a value
  // while

  // two pointers :
  // one moving from low to High
  // one moving from hight to low

  // check them out; if at one point they're not equal we are going to return false;

  var fast = head;
  var slow = head;

  // before they reach the end of the list we can move advance the nodes
  while (fast !== null && fast.next !== null) {
    // moves two spots
    fast = slow.next.next
    // moves one spot
    slow = slow.next;
  };

  // reset the fast node the head
  fast = head;
  // use the reverse function you learned to create
  slow = reverse(slow);

  // we move the slow node across the list, can use either one but we want the slow one to move around
  while (slow !== null) {
    // simple checkup to see if the nodes are the same
    if (slow.val !== fast.val) {
      return false;
    }
    // move them nodes
    slow = slow.next;
    fast = fast.next;
  }
  // no false means that the code reaches the true
  return true;

};

//!  THIS IS AN AWESOME FUNCION TO LEARN TO USE
var reverse = function (head) {
  // the previousNode should be null;
  var previousNode = null;

  // as long as our head aint null, we let it run...
  while (head !== null) {
    // !the steps below are magica!!!
    // !LEARN THEM AND YOU'LL RUN THE WORLD
    var nextNode = head.next
    head.next = previousNode;
    previousNode = head;
    head = nextNode;
  }

  return previousNode;
}