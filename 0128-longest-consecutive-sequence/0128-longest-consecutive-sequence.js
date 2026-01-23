/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hashSet = new Set(nums)
    let longest = 0
    for(let num of nums){
        if(!(hashSet.has(num-1))){
            let currentNum = num
            let streak = 1
            while(hashSet.has(currentNum+1)){
                currentNum++
                streak++
            }
            longest = Math.max(longest,streak)
        }
    }
    return longest
};