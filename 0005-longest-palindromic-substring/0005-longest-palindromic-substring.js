/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ""
    let maxLen = 0

    for(let i= 0; i < s.length; i++){
        //for odd centre outward position
        let l = i 
        let r = i
        while( l >= 0  && r< s.length && s[l] === s[r]){
            if((r-l+1)>maxLen){
                res = s.slice(l,r+1)
                maxLen = r-l+1
            }
            l--
            r++
        } 

        //for even centre outward position
        l = i 
        r = i+1
        while( l >= 0  && r< s.length && s[l] === s[r]){
            if((r-l+1)>maxLen){
                res = s.slice(l,r+1)
                maxLen = r-l+1
            }
            l--
            r++
        }  

    } 
    return res
}