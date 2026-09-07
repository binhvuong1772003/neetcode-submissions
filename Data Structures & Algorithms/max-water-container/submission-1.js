class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
maxArea(heights) {
    let left = 0
    let right = heights.length - 1
    let result = 0

    while (left < right) {
        const height = Math.min(heights[left], heights[right])
        result = Math.max(result, height * (right - left))

        if (heights[left] < heights[right]) {
            while (left < right && heights[left] <= height) {
                left++
            }
        } else {
            while (left < right && heights[right] <= height) {
                right--
            }
        }
    }

    return result
}
}
