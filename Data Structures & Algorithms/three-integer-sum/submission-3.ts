class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b)=>a-b)
        console.log(nums)
        let a = []
        let k =0
        let j = nums.length-1
        for (let i = 0;i<nums.length-2;i++){
            if(i>0&&nums[i] ===nums[i-1]){
                continue
            }
            k = i+1
            j = nums.length-1
            while (k<j){
                if (nums[j] + nums[k]+nums[i]>0){
                    j--
                    continue
                }
                if (nums[j] + nums[k]+nums[i]<0){
                    k++
                    continue
                }
                if (nums[j] + nums[k]+nums[i]===0){
                    a.push([nums[j],nums[k],nums[i]])
                    while(k<j&&nums[j]===nums[j-1]) j--
                    while(k<j&&nums[k]===nums[k+1]) k++
                    k++
                    j--
                    continue
                }
            }
        }
        console.log(a)
        return a
    }
}