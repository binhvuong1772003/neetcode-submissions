class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let a = 0
        let b = 0
        while (stones.length > 1){
            stones.sort((c,d) => c-d)
            console.log(stones)
            a = stones.pop()
            b = stones.pop()
            if (a !== b) {
                stones.push(a - b)
            }
    }
        return stones.length ? stones[0]:0

    }}