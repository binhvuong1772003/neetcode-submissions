class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length
        const base = 'A'.charCodeAt(0);
        let l = 0 
        const hashArray = new Array(26).fill(0)
        let maxFreq = 0
        let max = 0
        for (let r = 0; r<n;r++){
            const index = s.charCodeAt(r) -base
            hashArray[index]++
            maxFreq = Math.max(maxFreq,hashArray[index])
            if((r-l+1)-maxFreq>k){
                hashArray[s.charCodeAt(l)-base]--
                l++       
            }
            max = Math.max(r-l+1,max)
        }
        return max
    }
}
