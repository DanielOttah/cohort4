class Node_Queue {
    constructor(next, value) {
        this.node = next
        this.value = value
    }
}

export class Queue {
    constructor() {
        this.queue = null
    }

    enqueue(element) {
        let head = this.queue
        let newNode = new Node_Queue(null, element)

        if (!head) {
            this.queue = newNode
        } else {
            let traverseNode = head
            while (traverseNode.next) {
                traverseNode = traverseNode.next
            }
            traverseNode.next = newNode
        }
    }

    dequeue() {
        let head = this.queue

        if (!head) return 'Queue is empty!'

        this.queue = head.next
        return head.value
    }

    peek() {
        if (!this.queue) return 'Queue is empty!'
        return this.queue.value
    }
    printData() {
        let currentNode = this.queue;
        let index = 0;
        let arr = [];
        while (currentNode) {
            console.log(`Node ${++index} data: ${currentNode.data}`);
            arr.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return arr;
    }
    displayData() {
        return this.queue;

    }
}

class Node_Stack {
    constructor(next, value) {
        this.next = next
        this.value = value
    }
}

export class Stack {
    constructor() {
        this.stack = null
    }

    push(element) {
        let head = this.stack
        let newNode = new Node_Stack(null, element)

        if (!head) {
            this.stack = newNode
        } else {
            newNode.next = head
            this.stack = newNode
        }
    }

    pop() {
        let head = this.stack

        if (!head) return 'Stack is empty!'

        this.stack = head.next
        return head.value
    }

    peek() {
        if (!this.stack) return 'Stack is empty!'
        return this.stack.value
    }
}