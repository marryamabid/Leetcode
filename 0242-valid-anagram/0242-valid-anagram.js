/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let maps={}
    let mapt = {}
    for(let i=0; i< s.length; i++){
        maps[s[i]] = (maps[s[i]] || 0)+1
        mapt[t[i]] = (mapt[t[i]] || 0)+1
    }
    for(let key in maps){
        if(maps[key] !== mapt[key]) return false
    }
    return true
};