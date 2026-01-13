/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxCount = nums[0]
    let count = 0
    for(let int of nums ){
        count += int
        maxCount = Math.max(count,maxCount)
        if(count <0 ) count =0
        
    }
    return maxCount
};