
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
                console.log(`index of ${currentNode.data} is ${index}`);
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
            console.log(`Data at index ${index} is ${currentNode.data}`);
            return currentNode.data;

        }
    }
    insertAt(index, data) {

    }
    removeAt(index, data) {

    }
    printData() {
        let currentNode = this.head;
        let index = 0;
        let dataArray = [];
        while (currentNode) {
            dataArray.push(currentNode.data);
            console.log(`Item ${++index}`, currentNode.data);
            currentNode = currentNode.next;
        }
        return dataArray;
    }
    clearData() {
        this.head = null;
        this._length = 0;
    }

}

export default _LinkedList;

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}