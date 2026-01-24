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
var maxDepth = function(root) {
    if(!root) return 0
    function dfs(curr){
        if(!curr) return 0
        let left = dfs(curr.left)
        let right = dfs(curr.right)
        return 1+Math.max(left,right)
    }
    return dfs(root)
};