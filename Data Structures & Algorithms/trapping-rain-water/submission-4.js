class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let area = 0
        let i = 0
       while(i<height.length-1){
            let j = i+1
            if(height[i]<height[j]){i++; continue}
            let right = j
            while (j<height.length){
                if (height[j]>=height[i]){
                    right = j
                    break
                }
                if (height[right] <height [j]) {
                    right = j
                }
                j++    
            }
            let high = Math.min(height[i],height[right])
            for (let k =i+1;k<right;k++){
                area =area + high -height[k]
            }
            i = right
    }
    return area
}}
