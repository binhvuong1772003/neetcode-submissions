class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seq = new Set(nums)
        let maxLen = 0
        for (let num of seq){
            if(!seq.has(num-1)){
                let current = num
                let len = 1
                while(seq.has(current+1)){
                    len++
                    current++
                }
                console.log(len)
                maxLen = Math.max(len,maxLen)
                console.log(maxLen)
            }
        }
            return maxLen

    }
}
