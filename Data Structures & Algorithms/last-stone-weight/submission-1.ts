class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let minus = 0 
        let a = 0
        let b = 0
        while (stones.length > 1){
            stones.sort((c,d) => c-d)
            console.log(stones)
            a = stones.pop()
            b = stones.pop()
            minus = a - b
            stones.push(minus)
        }
        return stones[0]
    }
}
