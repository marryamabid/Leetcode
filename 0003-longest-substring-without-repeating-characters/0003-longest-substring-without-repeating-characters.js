/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let charSet = new Set()
   let maxLen = 0
   let left = 0
   for(let right=0 ; right< s.length; right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left])
            left++
        }
        charSet.add(s[right])
        maxLen = Math.max(maxLen,right-left+1)

   }
   return maxLen


};