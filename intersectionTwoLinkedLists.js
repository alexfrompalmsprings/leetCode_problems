/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 *
 *
  * If the two linked lists have no intersection at all, return null.
  The linked lists must retain their original structure after the function returns.
  You may assume there are no cycles anywhere in the entire linked structure.
  Your code should preferably run in O(n) time and use only O(1) memory.
 *
 * }
 */

 // A little visual for us to use.

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3



var getIntersectionNode = function (headA, headB) {

  // first edge case: no heads
  if(!headA || !headB){
    return null;
  }

  // make a couple of pointers
  var pointerOne = headA;
  var pointerTwo = headB;

  // check while we have the pointers and they're not the same
  while(pointerOne && pointerTwo && pointerOne !== pointerTwo){
    // increase them to the next node
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;

    // all the return statements that we are going to use
    if(pointerOne === pointerTwo){
      return pointerOne;
    }

    if(!pointerOne){
      pointerOne = headB
    }

    if(!pointerTwo){
      pointerTwo = headA
    }

  }
  return pointerOne;


};