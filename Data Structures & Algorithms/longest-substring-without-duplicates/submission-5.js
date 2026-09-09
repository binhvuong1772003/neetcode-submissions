class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length<1) return 0
        let left = 0 
        let right = 1
        let maxCount = 1
        let subString = s[0]
        while(right < s.length){
            const dupplicate = subString.indexOf(s[right])
            if(dupplicate !== -1){
                left += dupplicate
                subString = subString.slice(dupplicate+1)
            }
            subString +=s[right]
            maxCount = Math.max(maxCount,subString.length)
            right++
        }
        return maxCount
    }
}
