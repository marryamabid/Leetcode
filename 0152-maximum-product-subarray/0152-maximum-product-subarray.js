/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = nums[0]
    let minProduct = nums[0]
    let globalMax = nums[0];
    for(let i =1; i < nums.length ; i++){
        temp = minProduct
        minProduct = Math.min(nums[i],nums[i]*minProduct, nums[i] * maxProduct)
        maxProduct = Math.max(nums[i],nums[i]*temp, nums[i] * maxProduct)
        globalMax = Math.max(globalMax,maxProduct)
    }
    return globalMax
};