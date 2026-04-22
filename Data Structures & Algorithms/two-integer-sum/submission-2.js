class Solution {
    twoSum(nums, target) {
        const map = {}
        for (let i=0; i<nums.length;i++){
            let a = target - nums[i]
            if (map[a] !== undefined) return [map[a],i];
            map[nums[i]] = i
            console.log(map)
        }
    }
}
