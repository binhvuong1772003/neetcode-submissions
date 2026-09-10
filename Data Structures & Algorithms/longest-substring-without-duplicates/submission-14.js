class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      const hashArray = new Array(256).fill(-1)
      let left = 0
      let max = 0
      const n = s.length
      for (let r = 0; r < n;r++){
        if(hashArray[s.charCodeAt(r)] !== -1){
            if(hashArray[s.charCodeAt(r)] >= left){
                left = hashArray[s.charCodeAt(r)] + 1
            }
        }
        max = Math.max(max,r-left+1)
        hashArray[s.charCodeAt(r)] = r
      }
      return max
    }
}
