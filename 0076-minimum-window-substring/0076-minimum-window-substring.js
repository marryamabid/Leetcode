/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return""
    let need = {}
    for(let ch of t){
        need[ch] = (need[ch] || 0 )+1

    }
    let left = 0
    let right = 0
    let window = {}
    let have = 0
    let minLen = Infinity
    while(right < s.length){
        let c = s[right]
        right++
        if(need[c]){
            window[c] = (window[c] || 0)+1
            if(window[c] === need[c]) have++
        }
        while(have === Object.keys(need).length){
            if(right-left < minLen){
                start = left
                minLen = right-left
            }
            let d = s[left]
            left++
            if(need[d]){
                if(window[d] ===  need[d]) have--
                window[d]--
            }
        }
    }
    return minLen === Infinity ?  "" : s.substring(start,start+minLen)
};