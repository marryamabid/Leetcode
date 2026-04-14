/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let even = new Map()
    let odd = new Map()
    let n = nums.length

    for(let i =0; i < nums.length; i++){
        if(i % 2 === 0  ){
            even.set(nums[i], (even.get(nums[i]) || 0)+1)
        }else{
            odd.set(nums[i], (odd.get(nums[i]) || 0)+1)
        }
    }
    let twoMost = (map)=>{
        let top1 = [0,0]
        let top2 = [0,0]
        for(let [ num,freq] of map){
            if(freq > top1[1]){
                top2 = top1 
                top1 = [num,freq]
            }else if(freq > top2[1]){
                top2 = [num,freq]
            }
        }
        return [top1,top2]
    }
    let [e1,e2] = twoMost(even)
    let [o1,o2] = twoMost(odd)
    if(e1[0] !== o1[0]){
        return n - (e1[1]+o1[1])
    }
    return Math.min(
        n-(e1[1]+o2[1]),
        n-(e2[1]+o1[1])
    )
};