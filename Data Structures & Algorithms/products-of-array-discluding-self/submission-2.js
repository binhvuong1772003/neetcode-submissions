class Solution {
    productExceptSelf(nums) {
        const n = nums.length
        let output = new Array(n)
        output[0] = 1
        for (let i = 1; i< n;i++ ){
            output[i] = output[i-1]*nums[i-1]
        }
        let suf = 1
        for (let i = n-1;i>=0;i--){
            output[i] = output[i]*suf
            suf *=nums[i]
        }
    return output
    }
}
