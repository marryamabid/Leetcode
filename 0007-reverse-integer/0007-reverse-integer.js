/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
    
    const result = sign * reversed;
    
    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }
    
    return result;
};
