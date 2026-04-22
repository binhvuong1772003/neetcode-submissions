class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase().replace(/[^a-z0-9]/g,"")
        const a = Math.floor(string.length/2)
        console.log(string)
        for (let i =0;i<a;i++){
            if (string[i]!==string[string.length-i-1]){
                return false
            }
        }
        return true
    }
}
