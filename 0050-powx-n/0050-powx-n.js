/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function fastPow(x, n) {
        if (n === 0) return 1;

        let half = fastPow(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }

    if (n < 0) {
        return 1 / fastPow(x, -n);
    }

    return fastPow(x, n);
};