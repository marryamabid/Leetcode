/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    let slow = head
    let fast = head
    //first step is to find middle
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    //reverse the second half so that we can compare the first and second half
    let prev = null
    let current = slow
    while(current !== null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    //now we check both halfves are equal or not
    let left = head
    let right = prev
    while(right !== null){
        if(left.val !== right.val){
            return false
        }
        left = left.next
        right = right.next
    }
    return true
};