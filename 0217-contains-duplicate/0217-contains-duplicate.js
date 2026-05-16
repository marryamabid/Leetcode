/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set  = new Set()
    for(let value of nums){
        if(set.has(value)){
            return true
        }
        set.add(value)
    }
    return false
};