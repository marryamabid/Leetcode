/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let seen = new Set();
    let freq = {};

    // Step 1: Count frequency
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of s) {
        // Decrease frequency
        freq[char]--;

        // If already in stack → skip
        if (seen.has(char)) continue;

        // Maintain lexicographical order
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > char &&
            freq[stack[stack.length - 1]] > 0
        ) {
            let removed = stack.pop();
            seen.delete(removed);
        }

        stack.push(char);
        seen.add(char);
    }

    return stack.join('');
};