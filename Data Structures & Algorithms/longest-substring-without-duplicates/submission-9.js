class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      const n = s.length;
        const hashArray = Array(256).fill(-1);
        let left = 0;
        let right = 0;
        let maxLength = 0;
        while(right<n){
            if(hashArray[s.charCodeAt(right)] !== -1 ){
                if(hashArray[s.charCodeAt(right)]>=left){
                    left = hashArray[s.charCodeAt(right)] + 1;
                }
            }
            maxLength = Math.max(maxLength, right - left + 1);
            hashArray[s.charCodeAt(right)] = right;
            right++;
        }
        return maxLength;
    }
}
