# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # Create a dummy node to handle edge cases smoothly
        dummy = ListNode(0, head)

        fast = dummy
        slow = dummy

        # Move fast pointer n+1 steps ahead
        for _ in range(n + 1):
            fast = fast.next

        # Move both pointers until fast reaches end
        while fast:
            fast = fast.next
            slow = slow.next

        # Now slow is just before the node we need to remove
        slow.next = slow.next.next

        return dummy.next

        