/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let preSum  = nums[0]
   let maxSum  = nums[0]
   for(let i = 1 ; i < nums.length ; i++){
      preSum = Math.max(preSum + nums[i] , nums[i])
      maxSum = Math.max(maxSum,preSum  )
   }
   return maxSum
}