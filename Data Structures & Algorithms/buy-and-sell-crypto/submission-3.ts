class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0
        let buy = +Infinity
        for (let price of prices){
            buy = Math.min(buy, price)
            profit = Math.max(profit,price-buy)
        }
        return profit
        }}