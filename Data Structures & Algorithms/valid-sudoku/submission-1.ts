class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const row = Array.from({length:9},()=>new Set())
        const col = Array.from({length:9},()=>new Set())
        const boxes = Array.from({length:9},()=>new Set())
        let box = 0 
        for (let i = 0;i<9;i++){
            for (let j = 0;j<9;j++){
                let val = board[i][j]
                if (val ==='.') continue
                if (row[i].has(val)){return false }
                else row[i].add(val)
                if (col[j].has(val)){
                    return false 
                }else col[j].add(val)
                box = Math.floor(i/3)*3 + Math.floor(j/3)
                if (boxes[box].has(val)){
                    return false
                }else boxes[box].add(val)

                }
        }
        return true
    }
}
