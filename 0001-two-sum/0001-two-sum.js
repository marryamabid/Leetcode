/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    map = {}
    for(let i=0; i< nums.length; i++){
        const diff = target - nums[i]
        if(diff in map){
            return [map[diff],i]
        }
        map[nums[i]] = i
    }
};