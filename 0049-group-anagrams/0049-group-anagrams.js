/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = new Map()
    for(let str of strs){
        let key = str.split("").sort().join("")
        if(!hashMap.has(key)){
            hashMap.set(key,[])
        }
        hashMap.get(key).push(str)
    }
    return Array.from(hashMap.values())
};