/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let  i=0
    let sign =1
    let n = s.length
    while(i<n && s[i] ===" "){
        i++
    }
    if(s[i] ==="-" || s[i] === "+"){
        if(s[i] ==="-"){
            sign = -1
        }
        i++
    }
    let result =0
    while(i<n && (s[i] >= "0" && s[i] <="9")){
        let integer = s[i]
        let digit = integer -"0"
        if(
            result> Math.floor((2**31-1)/10)||
            (result === Math.floor((2**31-1)/10) && digit>7)
            ){
            return sign===1 ? 2**31-1 : -(2**31)
        }
        result = result * 10 + digit
       
        i++
    }
    return sign * result

};