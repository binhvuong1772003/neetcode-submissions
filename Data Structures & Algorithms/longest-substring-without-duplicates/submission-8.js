class Solution {
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        const lastSeen = new Map();

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            if (lastSeen.has(char) && lastSeen.get(char) >= left) {
                left = lastSeen.get(char) + 1;
            }

            lastSeen.set(char, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}