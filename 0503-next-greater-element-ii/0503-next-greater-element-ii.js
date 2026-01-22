/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = []
   let n = nums.length
   let res = new Array(nums.length).fill(0)
    for(let i=0 ; i<2*nums.length; i++){
        let idx = i % n
        while(stack.length && nums[stack[stack.length-1]] < nums[idx]){
            let prevIdx = stack.pop()
            res[prevIdx] = nums[idx] 
        }
       
        if(i<n){
           stack.push(i) 
        }
    }
    while(stack.length){
        let prevIdx = stack.pop()
            res[prevIdx] = -1 
    }
    return  res
};