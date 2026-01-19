/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length ===0){
        return fasle
    }
    const hashMap ={
        ')':'(',
        '}': "{",
        ']':'['
    }
    let stack = []
    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
        stack.push(char)
    }else{
        if (stack.length === 0) return false;
        let top = stack.pop()
        if(top !== hashMap[char]) return false
    }
    }
    return stack.length === 0
};