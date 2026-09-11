class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n =temperatures.length
        const result = new Array(n).fill(0)
        const stack = new Array()
        for(let i =0;i<n;i++){
            while(stack.length > 0 && temperatures[i] >temperatures[stack[stack.length-1]]){
                let a = stack.pop()
                result[a] = i - a
            }
            stack.push(i)
        }
        return result
    }
}
