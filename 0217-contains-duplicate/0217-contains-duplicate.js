/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums){
    const map ={}
    for(let i=0; i < nums.length;i++){
        map[nums[i]] = ( map[nums[i]] || 0) +1
    }
    for(let int of nums){
        if(map[int] > 1){
            return true
        }
    }
    return false
}  