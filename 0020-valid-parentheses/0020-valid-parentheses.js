/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

   for(let elem of s){
    //closing bracket
    if(map[elem]){
        let top = stack.pop()
        if(top!==map[elem]){
            return false
        }
    }else{
        stack.push(elem)
    }
   }
   return stack.length === 0
};