/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0
    let maxOnesCount = 0
    let maxLen = 0
    for(let end=0; end < nums.length; end++){
        if(nums[end]===1){
            maxOnesCount++
        }
        if(end-start+1-maxOnesCount > k){
            if(nums[start] === 1){
                maxOnesCount--
            }
            start++
        }
        maxLen = Math.max(maxLen, end-start+1)
    }
    return maxLen
};