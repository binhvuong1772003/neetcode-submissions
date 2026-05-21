class Solution {
    isValid(s: string): boolean {
        let stack = []

        for (const i of s) {

            if (i === "(" || i === "[" || i === "{") {
                stack.push(i)
            } 
            else {

                const x = stack.pop()

                if (
                    (x === "(" && i === ")") ||
                    (x === "[" && i === "]") ||
                    (x === "{" && i === "}")
                ) {
                    continue
                } 
                else {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}