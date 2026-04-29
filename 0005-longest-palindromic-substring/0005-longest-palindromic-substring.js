/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome (center at i)
        expand(i, i);

        // Even length palindrome (center between i and i+1)
        expand(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};