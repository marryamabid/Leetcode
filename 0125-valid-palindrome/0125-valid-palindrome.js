/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let replaced = s.toLowerCase().replace(/[^0-9a-z]/g,"")
    let left = 0
    let right = replaced.length-1
    while(left < right){
        if(replaced[left] !== replaced[right]){
            return false
        } 
        left++
        right--
    }
    return true
};