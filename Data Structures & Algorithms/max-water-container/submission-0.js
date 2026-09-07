class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length -1
        let result = 0
        while (left !==right){
            const height = heights[left] < heights[right] ? heights[left] : heights[right]
            const sq = height * (right-left)
            if (sq>result) result = sq
            if (heights[left] < heights[right]) {
                left++
            }else{
                right--
            }
        }
        return result
    }
}
