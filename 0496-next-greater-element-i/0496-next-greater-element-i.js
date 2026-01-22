/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashMap = new Map()
    const stack = []
    for(let num of nums2){
        while(stack.length && stack[stack.length-1] < num){
            hashMap.set(stack.pop(),num)
        }
        stack.push(num)
    }
    while(stack.length){
         hashMap.set(stack.pop(),-1)
    }
    return nums1.map((num)=>hashMap.get(num))
};