/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length 
    k = k % n
    function reverse(l,r){
        while(l <r){
            [nums[l],nums[r]] = [nums[r],nums[l]]
            l++
            r--
        }
    }
    reverse(0,n-1)
    reverse(0,k-1)
    reverse(k,n-1)
}
