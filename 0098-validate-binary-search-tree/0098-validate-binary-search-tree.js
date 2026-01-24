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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function dfs(curr,min,max){
        if(!curr) return true
        if(curr.val<=min || curr.val >= max){
            return false
        }
        return (dfs(curr.left,min,curr.val) && dfs(curr.right,curr.val,max))
    }
    return dfs(root,-Infinity,Infinity)
};
