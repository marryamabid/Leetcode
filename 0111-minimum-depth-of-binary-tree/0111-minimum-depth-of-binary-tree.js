/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    function dfs(curr){
        if(!curr) return 0
        if(!curr.left) return 1+dfs(curr.right)
        if(!curr.right) return 1+dfs(curr.left)

        return 1+Math.min(dfs(curr.left),dfs(curr.right))
    }
    return dfs(root)
};