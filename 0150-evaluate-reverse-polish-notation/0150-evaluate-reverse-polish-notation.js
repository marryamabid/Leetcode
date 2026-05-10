/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let operators = ["+","-","/","*"]
    for(let char of tokens){
        if(operators.includes(char)){
            let a = stack.pop()
            let b = stack.pop()
            if(char === "+"){
                stack.push(b+a)
            }else if(char === "-"){
                stack.push(b-a)
            }else if(char === "*"){
                stack.push(b*a)
            }else{
                stack.push(Math.trunc(b / a))
            }
        }else{
            stack.push(Number(char))
        }
    }
    return stack.pop()
};