/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minSize = Infinity
    let start =0
    let currentSum = 0
    for(let end=0; end < nums.length ; end++){
        currentSum += nums[end]
        
        while(currentSum >= target ){
            minSize = Math.min(end-start+1,minSize)
            currentSum -= nums[start]
            start++
        }
    }
    return minSize === Infinity ? 0 : minSize
};