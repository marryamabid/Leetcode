# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # Map value -> index in inorder for O(1) lookup
        inorder_index = {val: idx for idx, val in enumerate(inorder)}
        
        # Use an index to track root position in preorder
        self.pre_idx = 0

        def array_to_tree(left, right):
            # if no elements left in this subtree
            if left > right:
                return None

            # pick current root from preorder
            root_val = preorder[self.pre_idx]
            self.pre_idx += 1
            root = TreeNode(root_val)

            # build left & right subtrees using inorder index
            root.left = array_to_tree(left, inorder_index[root_val] - 1)
            root.right = array_to_tree(inorder_index[root_val] + 1, right)

            return root

        return array_to_tree(0, len(inorder) - 1)
        