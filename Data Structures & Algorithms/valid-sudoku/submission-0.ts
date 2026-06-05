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
                if (board[i][j] ==='.') continue
                if (row[i].has(board[i][j])){return false }
                else row[i].add(board[i][j])
                if (col[j].has(board[i][j])){
                    return false 
                }else col[j].add(board[i][j])
                box = Math.floor(i/3)*3 + Math.floor(j/3)
                if (boxes[box].has(board[i][j])){
                    return false
                }else boxes[box].add(board[i][j])

                }
        }
        return true
    }
}
