
class _LinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
    }
    size() {
        return this._length;
    }
    add(val) {
        this.node = new ListNode(val)
        if (!this.head) {
            this.head = this.node;
            this._length += 1;
            return this.node;
        }
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = this.node;
        this._length += 1;
        return this.node;
    }
    remove(val) {
        try {
            let currentNode = this.head;
            let previousNode;
            if (currentNode === null) {
                return;
            } else {
                if (currentNode.data === val) {
                    this.head = currentNode.next;
                    this._length--;
                }
                while (currentNode.data !== val) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
            }
            this._length--;
            return this.node;
        } catch (err) {
            alert("Error! value doesn't exist")
        }
    }
    indexOf(val) {

        let currentNode = this.head;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.data === val) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
    dataAt(index) {
        let currentNode = this.head;
        let count = 0;
        if (index >= this._length) {
            return;
        } else {
            while (count < index) {
                count++;
                currentNode = currentNode.next;
            }
            return currentNode.data;

        }
    }
    insertAt(index, data) {
        let node = new ListNode(data);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index > this._length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this._length++;
    }
    removeAt(index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index < 0 || index >= this._length) {
            return null;
        }
        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this._length--;
    }
    printData() {
        let currentNode = this.head;
        // let index = 0;
        let arr = [];
        if (currentNode === null) {
            return arr;
        }
        else {
            while (currentNode) {
                // console.log(`Node ${++index} data: ${currentNode.data}`);
                arr.push(currentNode.data);
                currentNode = currentNode.next;
            }
            return arr;
        }
    }
    displayData() {
        return this.head;

    }
    clearData() {
        this.head = null;
        this._length = 0;
    }
}

export default _LinkedList;

// class ListNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

function ListNode(data) {
    this.data = data;
    this.next = null;
}
