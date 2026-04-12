/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let minSum = nums[0]
    let maxSum = nums[0]
    let totalSum = 0 
    let currentMax = 0 
    let currentMin = 0 
    for(let num of nums){
        currentMax = Math.max(currentMax+num, num)
        maxSum = Math.max(currentMax , maxSum)

        currentMin = Math.min(currentMin+num,num)
        minSum = Math.min(currentMin,minSum)

        totalSum += num
    }
    if(maxSum < 0) return maxSum
    return Math.max(totalSum - minSum, maxSum)
};