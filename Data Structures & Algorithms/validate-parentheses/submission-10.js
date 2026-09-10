class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = new Array()
        if(s.length %2 !==0) return false
        for (let char of s){
            if(char ==="[" || char === "(" || char === "{" ){
                stack.push(char)
            }
            if (char ===")" && stack.pop() !=="(") return false
            if (char ==="]" && stack.pop() !=="[") return false
            if (char ==="}" && stack.pop() !=="{") return false
        }
        if (stack.length===0) return true
        else return false
    }
}
