class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let maxProfit = 0
        while (right< prices.length){
            if (prices[left]>prices[right]){
                left = right
            }
            if(prices[right]-prices[left]>maxProfit){
                maxProfit = prices[right] - prices[left]
            }
            right++
        }
        return maxProfit
    }
}
