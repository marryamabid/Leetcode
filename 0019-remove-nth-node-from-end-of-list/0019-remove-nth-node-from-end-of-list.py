# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        # Create a dummy node to handle edge cases smoothly
        dummy = ListNode(0)
        dummy.next = head
        
        fast = dummy
        slow = dummy

        # Move fast n+1 steps ahead to maintain a gap of n between fast and slow
        for _ in range(n + 1):
            fast = fast.next

        # Move both pointers until fast reaches the end
        while fast:
            fast = fast.next
            slow = slow.next

        # Skip the target node
        slow.next = slow.next.next

        return dummy.next
        