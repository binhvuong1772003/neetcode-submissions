class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n =temperatures.length
        const result = new Uint8Array(n)
        const  stack= new Array()
        for(let i =n-1;i>-1;i--){
            while(stack.length > 0 && temperatures[stack.at(-1)] <= temperatures[i]){
                stack.pop()
            }
            result[i] = stack.length?stack.at(-1)-i:0
            stack.push(i)
        }
        return result
    }
}
