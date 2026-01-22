/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = []
    let res = 0
    heights.push(0)
    for(let i=0; i<heights.length; i++){
        while(stack.length && heights[stack[stack.length-1]]>heights[i]){
            let height = heights[stack.pop()]
            let width = stack.length===0 ? i: i-stack[stack.length-1] -1
            res = Math.max(res,height*width)
        }
        stack.push(i)
    }
    return res
};