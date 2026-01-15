/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return ""
    let need ={}
    for(let char of t){
        need[char] = (need[char] || 0)+1
    }
    let window = {}
    let left = 0
    let right=0
    let start =0
    let valid =0
    let minLen = Infinity
    while(right < s.length){
        let c = s[right]
        right++
        if(need[c]){
            window[c]=(window[c] || 0)+1
            if (window[c] === need[c]) valid++;
        }
    while(valid === Object.keys(need).length){
        if(right-left < minLen){  
            start = left
            minLen = right-left //We store the best answer so far.
        }
        let d = s[left]
        left++
        if(need[d]){
            if(window[d]=== need[d] ) valid--
            window[d]--
        }
    }

    }
    
    
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};