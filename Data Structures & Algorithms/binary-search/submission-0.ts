class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length -1
        while(l<=r) {
            let mid = Math.floor((l+r)/2)
            console.log(mid)
            if (nums[mid] ===target){
                return mid
            }
            if(nums[mid] >target)
                {r = mid -1}
            else 
                {l=mid +1} 
        }
       return -1
    }}