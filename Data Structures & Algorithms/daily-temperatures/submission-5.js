class Solution {
    /**      
     * * @param {number[]} temperatures      
     * * @return {number[]}     
     */
    dailyTemperatures(temperatures) {
        const res = new Uint8Array(temperatures.length);
        const stack = [];

        for (let i = temperatures.length - 1; i > -1; i--) {
            /** 
             * Pop all indices whose temperatures are less than or 
             * equal to the current temperature, as they can no
             * longer be the next warmer day for the current index. 
            */
            while (
                stack.length &&
                temperatures[stack.at(-1)] <= temperatures[i]
            ) {
                stack.pop();
            }
            /** The value is the difference between the index of the
             *  next warmer day and the current index. 
             *  Defaults to 0 if no warmer day is found. 
            */
            res[i] = stack.length
                ? stack.at(-1) - i
                : 0;

            stack.push(i);
        }
        return res;
    }
}