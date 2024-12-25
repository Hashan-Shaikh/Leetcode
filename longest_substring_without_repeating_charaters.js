/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const charSet = new Set(); // To track characters in the current substring
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        // If duplicate character, shrink the window from the start
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(s[end]);

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
    
};