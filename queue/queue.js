// each node has a value and a pointer to the next node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // next property will point to next node when we add a node to the queue
  }
}
// the queue class has a first and last property and consist of nodes
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.data;
  }
}
const queue = new Queue;
queue.enqueue("value1");
console.log(queue); 
queue.enqueue("value2");
console.log(queue); 

queue.dequeue();
console.log(queue);