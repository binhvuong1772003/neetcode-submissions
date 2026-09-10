class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array()
        for (let token of tokens ){
            switch(token){
                case '+':
                    stack.push(stack.pop() + stack.pop())
                    continue
                case '-':
                    stack.push(-stack.pop() + stack.pop())
                    continue    
                case '*':
                    stack.push(stack.pop() * stack.pop())
                    continue
                case '/':
                    stack.push(Math.trunc((1/stack.pop()) * stack.pop() )    )     
                    continue
                default:
                    stack.push(Number(token)) 
                    }
        }
        return stack.pop()
    }
}
