class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let minIndex = 0
        let maxIndex = numbers.length-1
        while (minIndex !==maxIndex){
            if (numbers[minIndex] + numbers[maxIndex] ===target){
                return [minIndex+1,maxIndex+1]
            }else if(numbers[minIndex] + numbers[maxIndex] >target){
                maxIndex -=1
            }else minIndex+=1
        }
    }
}
