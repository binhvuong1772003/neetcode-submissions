class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = ""
        for (const str of strs){
            output +=`${str.length}#` + str
        }
        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i =0
        let strs = []
        while (i<str.length){
            let j = str.indexOf("#",i);
            const len =parseInt(str.slice(i,j))
            strs.push(str.slice(j+1,j+1+len))
            i = j+1+len
        }
        return strs
    }
}
