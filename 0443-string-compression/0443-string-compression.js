/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;  // Where we write in chars
    let count = 1;

    for (let read = 0; read < chars.length; read++) {
        if (chars[read] === chars[read + 1]) {
            count++;
        } else {
            // Write the character
            chars[write++] = chars[read];

            // Write the count if > 1
            if (count > 1) {
                for (let digit of count.toString()) {
                    chars[write++] = digit;
                }
            }

            count = 1; // reset for next group
        }
    }

    return write;  // New length of compressed array
};