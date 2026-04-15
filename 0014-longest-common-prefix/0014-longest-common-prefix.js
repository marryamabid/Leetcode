/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0) return ""
    let res = ""
    for(let i=0 ; i< strs[0].length; i++){
        let current = strs[0][i]
        for(let j=1; j< strs.length; j++){
            if(i >= strs[j].length || current !== strs[j][i]){
                return res
            }
        }
        res += current
    }
    return res
};