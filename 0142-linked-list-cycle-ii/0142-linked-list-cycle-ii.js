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
var detectCycle = function(head) {
    let cycleLength = 0
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            cycleLength = findCycleLen(slow)
            break
        }
    }
    if (cycleLength === 0) return null;

    return findStart(head, cycleLength);
};
function findCycleLen(slow){
    let cycleLen = 0
    let current = slow
    while(true){
        current = current.next
        cycleLen++
        if(current === slow) break
        
    }
    return cycleLen
}
function findStart(head,cycleLength){
    let pointer1 = head
    let pointer2 = head
    while(cycleLength>0){
        pointer2 = pointer2.next
        cycleLength--
    }
    while(pointer1 !== pointer2){
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    return pointer1
}