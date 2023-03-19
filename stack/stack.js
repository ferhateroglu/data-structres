// we can create stack using array. Using its push and pop methods but now we will create our own stack class usign linked list.

// Node class is used to create node for stack. Each node will have data and next property.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // next property will point to next node
  }
}

// Now we need to create stack class.

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // if stack is empty then first and last will point to new node. If stack is not empty then new node will be added to the top of the stack and first will point to new node.
  push(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if(!this.first){
        return null;
    }
    let temp = this.first;
    // if there is only one node in stack then first and last will be null
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.data;
  }
}



const stack = new Stack

stack.push("value1")
stack.push("value2")
stack.push("value3")

console.log(stack.first) 
console.log(stack.last) // Node { value: 'value1', next: null }
console.log(stack.size) // 3

stack.push("value4")
console.log(stack.first) // value3
console.log(stack.pop()) // value4
console.log(stack.first) // value3