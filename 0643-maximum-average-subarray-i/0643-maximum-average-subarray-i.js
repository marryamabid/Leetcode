/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAverage = -Infinity
    let start = 0
    let windowSum = 0
    for(let end=0; end < nums.length; end++){
        windowSum += nums[end]
        if(end >= k-1){
            maxAverage= Math.max(maxAverage,windowSum/k)
            windowSum -= nums[start]
            start++
        }

    }
    return maxAverage
};