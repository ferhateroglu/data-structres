// leetcode 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/

var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    
    this.queue.push(x);
    if(!this.empty()){  
        // 1
        // 1 2    1 2 1   1 2 1 pop   2 1
        // 2 1 3  2 1 3 2 pop  1 3 2 1 pop   

        for(let i = 0, len = this.queue.length; i < len -1; i++){
            this.queue.push(this.queue[0]);
            this.queue.shift();
        }
    }

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};


var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)


console.log(obj.pop())
console.log(obj.top())
console.log(obj.empty())
