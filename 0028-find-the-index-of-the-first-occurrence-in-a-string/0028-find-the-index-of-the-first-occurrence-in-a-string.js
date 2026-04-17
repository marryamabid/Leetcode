/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==="") return 0
    let i = 0
    let j = 0
    let n = haystack.length
    let m = needle.length
    while(i < haystack.length){
        if( haystack[i] === needle[j]){
            j++
            i++
            if(j===m){
            return i-j
        }
        }else{
            i=i-j+1
            j=0
        }
        
    }
    return -1
};