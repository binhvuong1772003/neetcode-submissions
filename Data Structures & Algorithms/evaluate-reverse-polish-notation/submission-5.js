class Solution {
    //Recursion
    evalRPN(tokens) {
        function recursive() {
            const token = tokens.pop();
            if (!'+-*/'.includes(token)) return Number(token);
            const r = recursive();
            const l = recursive();
            if (token === '+') {
                return l + r;
            } else if (token === '-') {
                return l - r;
            } else if (token === '*') {
                return l * r;
            } else {
                return Math.trunc(l / r);
            }

        }
        return recursive();
    }
}
