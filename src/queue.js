const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue___add to tail remove from head
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }


  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = new Node(data);
    if (this.tail) this.tail.next = node;
    if (!this.head) this.head = node;
    this.tail = node;


  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const current = this.head.value;
    this.head = this.head.next;
    return current;

  }
}

module.exports = {
  Queue
};
