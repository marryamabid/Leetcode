/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length-1
    while(left<right){
        let h = Math.min(height[left],height[right])
        let w = right - left
        let area = h*w
        maxArea = Math.max(maxArea,area)
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
};