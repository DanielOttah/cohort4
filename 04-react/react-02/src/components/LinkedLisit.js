import React, { Component } from 'react';

class LinkedList extends Component {
    constructor(props) {
        super(props);
        this.sll = new LinkedList2();
    }
    handleLinkedList = () => {
        const inputVal = document.getElementById("idSll");
        const selectVal = document.getElementById("idSelect");

        if (selectVal.value === "getSize") {
            console.log("Linked list size is: ", this.sll.size());
        } else if (selectVal.value === "addData") {
            this.sll.add(inputVal.value);
            // this.handlePrintLinkedList();
        }
        else if (selectVal.value === "removeData") {
            this.sll.remove(inputVal.value);
            // this.handlePrintLinkedList();
        }
        else if (selectVal.value === "clearData") {
            this.sll.clearList();
            // this.handlePrintLinkedList();
        }
        else if (selectVal.value === "printData") {
            this.handlePrintLinkedList();
        }

    }
    handlePrintLinkedList = () => {
        // console.log(this.sll); // Method 1
        console.log(this.sll.printListData()); // Method 2
    }
    render() {
        return (
            <div>
                <input id="idSll" type="text" />
                {/* <button onClick={this.handleLinkedList}>Add</button> */}
                <select id="idSelect">
                    <option value="getSize">Get Size</option>
                    <option value="addData">Add Data</option>
                    <option value="removeData">Remove Data</option>
                    <option value="clearData">Clear Data</option>
                    <option value="printData">Print Data</option>
                </select>
                <button onClick={this.handleLinkedList}>Complete</button>


            </div>
        );
    }
}

export default LinkedList;


//  ====== 1 Method =====================
// function Node(data) {
//     this.data = data;
//     this.next = null;
// }
// function LinkedList() {
//     this._length = 0;
//     this.head = null;
// }
// LinkedList.prototype.add = function (val) {
//     let node = new Node(val);
//     if (!this.head) {
//         this.head = node;
//         this._length += 1;
//         return node;
//     }
//     let current = this.head
//     while (current.next) {
//         current = current.next;
//     }
//     current.next = node;
//     this._length += 1;
//     return node;

// }


//============== Method 2 =======================
function LinkedList2() {
    let _length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return _length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        _length++;
    };

    this.remove = function (element) {
        try {
            let currentNode = head;
            let previousNode;
            if (currentNode === null) {
                return;
            } else {
                if (currentNode.element === element) {
                    head = currentNode.next
                }
                while (currentNode.element !== element) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;

            }
            _length--;
        } catch (err) {
            alert("Error! vlaue doesn't exist", err);
        }
    };

    this.isEmpty = function () {
        return _length === 0;

    }

    this.indexOf = function (element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;

        }
        return -1;
    };

    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };

    this.addAt = function (index, element) {
        let node = new Node(element);
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > _length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        _length++;

    }
    this.removeAt = function (index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;
        if (index < 0 || index >= _length) {
            return null;
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        _length--;
        return currentNode.element;
    };

    this.printListData = function () {
        let current = head;
        let index = 0;
        // console.log("the size is: ", _length);
        while (current) {
            console.log(`Item ${++index}`, current.element);
            current = current.next;
        }
    }
    this.clearList = () => {
        head = null;
        _length = 0;
    }

}