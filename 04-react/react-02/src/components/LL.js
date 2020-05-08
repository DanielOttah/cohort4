import React, { Component } from 'react';
import _LinkedList from './_LinkedList.js'

class LL extends Component {
    constructor(props) {
        super(props);
        this.sll = new _LinkedList();
    }
    handleLinkedList = () => {
        const inputVal = document.getElementById("idSll");
        const selectVal = document.getElementById("idSelect");

        if (selectVal.value === "getSize") {
            console.log("Linked list size is: ", this.sll.size());
        } else if (selectVal.value === "addData") {
            this.sll.add(inputVal.value);

        }
        else if (selectVal.value === "removeData") {
            this.sll.remove(inputVal.value);
        }
        else if (selectVal.value === "clearData") {
            this.sll.clearData();

        }
        else if (selectVal.value === "printData") {
            this.sll.printData();
        }
        else if (selectVal.value === "indexOfData") {
            this.sll.indexOf(inputVal.value);
        }
        else if (selectVal.value === "dataAt") {
            this.sll.dataAt(inputVal.value);
        }
        else if (selectVal.value === "insertDataAt") {
            this.sll.insertAt(inputVal.value);
        }
        else if (selectVal.value === "removeDataAt") {
            this.sll.removeAt(inputVal.value);
        }

    }

    render() {
        return (
            <div>
                <input id="idSll" type="text" />
                <select id="idSelect">
                    <option value="getSize">Get Size</option>
                    <option value="indexOfData">Index Of Data</option>
                    <option value="dataAt">Data at Index</option>
                    <option value="addData">Add Data</option>
                    <option value="removeData">Remove Data</option>
                    <option value="insertDataAt">Insert Data At</option>
                    <option value="removeDataAt">Remove Data At</option>
                    <option value="printData">Print Data</option>
                    <option value="clearData">Clear Data</option>
                </select>
                <button onClick={this.handleLinkedList}>Complete</button>


            </div>
        );
    }
}

export default LL;
