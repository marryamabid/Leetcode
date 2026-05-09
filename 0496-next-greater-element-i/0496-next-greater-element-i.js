/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    let map = new Map()
    for(let num of nums2){
        while(stack.length > 0 && num > stack[stack.length -1]){
            let smaller = stack.pop()
            map.set(smaller,num)
        }
        stack.push(num)
    }
    while(stack.length){
        map.set(stack.pop(),-1)
    }
    let res = []
    for(let num of nums1){
            if(map.has(num)){
                res.push(map.get(num))
            }
    }
    return res
};