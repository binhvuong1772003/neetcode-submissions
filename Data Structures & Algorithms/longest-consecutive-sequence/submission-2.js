class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seq = new Set(nums);
        let maxLen = 0;
        for (let num of seq){
            if(!seq.has(num-1)){
                let len = 1
                while(seq.has(num+len)){
                    len++
                }
                maxLen = Math.max(len,maxLen)
            }
        }
            return maxLen

    }
}
