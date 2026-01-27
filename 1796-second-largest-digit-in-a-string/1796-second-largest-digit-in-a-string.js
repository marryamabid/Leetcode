/**
 * @param {string} s
 * @return {number}
 */var secondHighest = function (s) {
    let max = -1;
    let secondMax = -1;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            let num = Number(char);

            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num < max && num > secondMax) {
                secondMax = num;
            }
        }
    }

    return secondMax;
};