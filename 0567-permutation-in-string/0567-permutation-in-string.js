/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let start = 0
    let frequencyS1= {}
    let isMatch = 0
    for(let i =0; i<s1.length; i++){
        if(!(s1[i] in frequencyS1)){
            frequencyS1[s1[i]] = 0
        }
        frequencyS1[s1[i]]++
    }
    for(let end =0; end < s2.length ; end++){
        let endChar = s2[end]
         if (endChar in frequencyS1) {
            frequencyS1[endChar]--;

            if (frequencyS1[endChar] === 0) {
                isMatch++;
            }
        }

        if(end-start+1 > s1.length){
            let startChar = s2[start]
            if(startChar in frequencyS1){
                if(frequencyS1[startChar] === 0){
                    isMatch--
                }
                frequencyS1[startChar]++
            }
            start++
        }
        if(isMatch === Object.keys(frequencyS1).length){
            return true
        }
        
    }
    return false
};