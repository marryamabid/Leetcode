/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "null"
    return root.val+","+serialize(root.left)+","+ serialize(root.right)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(",")
    function build(){
        let val = nodes.shift()
        if(val === "null") return null
        let node = new TreeNode(parseInt(val))
        node.left = build()
        node.right = build()
        return node
    }
    return build()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */