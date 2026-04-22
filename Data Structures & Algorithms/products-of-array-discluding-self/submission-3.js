class Solution {
    productExceptSelf(nums) {
        let prefix = new Int32Array(nums.length)
        for (let i = 0; i<nums.length;i++){
            prefix[i] = (i>0 ? prefix[i-1]:1)*nums[i]
        }
        let suffix = new Int32Array(nums.length)
        for (let i = nums.length;i>0;i--){
            suffix[i] = (i<nums.length-1 ? suffix[i+1] : 1)*nums[i]
        }
        const out = new Int32Array(nums.length)
        for (let i=0; i<nums.length;i++) {
            out[i] = (i>0?prefix[i-1]:1) * (i<nums.length-1?suffix[i+1]:1)
        }
        return out
    }
}
