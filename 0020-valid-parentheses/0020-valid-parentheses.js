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

    for (let char of s) {
        // if it's a closing bracket
        if (char in map) {
            let top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        } else {
            // opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0;
};