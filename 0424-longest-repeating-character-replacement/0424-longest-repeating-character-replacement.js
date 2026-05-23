/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxLength = 0
    let start = 0
    let maxRepeatLetterCount = 0
    let windowMap = {}
    for(let end = 0; end<s.length; end++){
        let endChar = s[end]
        if(!(endChar in windowMap)){
            windowMap[endChar] = 0
        }
        windowMap[endChar]++
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, windowMap[endChar])
        if(end-start+1-maxRepeatLetterCount>k){
            let startChar = s[start]
            windowMap[startChar]--
            start++
        }
        maxLength = Math.max(maxLength,end-start+1)
    }
    return maxLength
};