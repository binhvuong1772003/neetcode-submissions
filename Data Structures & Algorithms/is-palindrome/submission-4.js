class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let destructS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let checkS = [...destructS]
        let halfLength = Math.floor(checkS.length)
        let endI = checkS.length - 1

        for (let i = 0; i < halfLength ; i++) {
           if (checkS[i] !== checkS[endI]) {
               return false
           } else if (checkS[i] === checkS[endI]) {
               endI--      
           } 
        }
        return true
    }
}
