// leetcode 20. Valid Parentheses solution
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const characters = { // (([{}]))
        '(':')',
        '{':'}',
        '[':']'
    }
    const arrStack = [];

    for(const char of s){
        if(arrStack.length === 0){
            arrStack.push(char)
        }else if(characters[char]){
            arrStack.push(char)
        }
        else if(characters[arrStack[arrStack.length - 1]] === char){
            arrStack.pop()
        }else{
            return false;
        }
    }
    return arrStack.length === 0;
};
