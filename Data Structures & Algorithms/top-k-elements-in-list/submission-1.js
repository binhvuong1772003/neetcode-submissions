class Solution {
    topKFrequent(nums, k) {
        const map = {}
        for (const num of nums){
            if(map[num] !==undefined) map[num] = map[num] +1
            else map[num] =1
        }
        const entries = Object.entries(map)
        entries.sort((a, b) => b[1] - a[1]);
        const output = entries.slice(0,k).map(([key]) => Number(key))
        console.log(output)
        return output
        }
}
