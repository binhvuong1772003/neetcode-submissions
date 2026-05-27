class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = +Infinity;
        let max = 0;
        for (let price of prices) {
            max = Math.max(max, price - min);
            min = Math.min(price,min);
        }

        return max;
    }
}
