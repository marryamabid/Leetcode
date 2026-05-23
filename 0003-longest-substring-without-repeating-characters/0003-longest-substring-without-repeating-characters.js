/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0
    let windowMap = new Map()
    let maxLength = 0
    for(let end = 0; end < s.length; end++){
        let endChar = s[end]
        if(windowMap.has(endChar)){
            start = Math.max(start,windowMap.get(endChar)+1)
        }
        windowMap.set(endChar,end)
        maxLength = Math.max(maxLength,end-start+1)
    }
    return maxLength
};