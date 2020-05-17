import React, { Component } from 'react';
// import _LinkedList from './_LinkedList.js'
import { Queue, Stack } from './_LinkedList_2.js'
// import SelectDataType from './SelectDataType.js'
import { Input, Button } from './Input.js'
import { ThemeContext } from '../../context/ThemeContext';
import './LL.css'
// import CreateLLCard from './CreateLLCard.js';

export class LinkedListComponent extends Component {
    constructor(props) {
        super(props);
        this.sll = new Queue();
        // this.slls = new Stack();
        this.llQueueArray = [];
        // this.llStackArray = [];
        this.state = {
            position: 0,
            LL: this.sll
            // sll: new _LinkedList()
        }
    }
    handleLinkedList = () => {
        const inputVal = document.getElementById("idSllSubject");
        const inputValdata = document.getElementById("idSllValue");
        const selectVal = document.getElementById("idSelect");
        const selectView = document.getElementById("idselectView");
        selectView.checked ? printLL1() : printLL2();

        if (selectVal.value === "getSize") {
            console.log(`Linked list size is: ${this.sll.size()}`);
        }
        else if (selectVal.value === "removeData") {
            this.sll.remove(inputVal.value);
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "clearData") {
            this.sll.clearData();
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "displayLL") {
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "printData") {
            this.sll.printData();
        }
        else if (selectVal.value === "indexOfData") {
            console.log(`index of ${inputVal.value} is ${this.sll.indexOf(inputVal.value)}`);
        }
        else if (selectVal.value === "dataAt") {
            console.log(`Data at index of ${inputVal.value} is ${this.sll.dataAt(inputVal.value)}`);
        }
        else if (selectVal.value === "insertDataAt") {
            this.sll.insertAt(inputVal.value, inputValdata.value);
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "removeDataAt") {
            this.sll.removeAt(inputVal.value);
            console.log(this.sll.displayData());
        }

    }
    CreateLinkedList = () => {
        const inputSubject = document.getElementById("idSllSubject");
        const inputValue = document.getElementById("idSllValue");
        const idSelectDataType = document.getElementById("idSelectDataType");

        this.sll.enqueue(inputSubject.value, inputValue.value);
        console.log(this.sll.displayData());

        // this.setState({
        //     LL: this.sll
        // })
    }
    CreateLinkedListArray = () => {
        const inputVal = document.getElementById("idSll");
        this.llArray.push(inputVal.value);
    }
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const currentTheme = isLightTheme ? light : dark;
                return (
                    <div className="bodySettings" style={{ background: currentTheme.ui, color: currentTheme.textColor }}>
                        <div className="container">
                            <fieldset>
                                <legend>Create Linked List Node</legend>
                                <div>
                                    <label>Enter Subject: <Input id="idSllSubject" type="text" style={{ marginRight: "5px" }} /></label>
                                    <label>Enter Value: <Input id="idSllValue" type="text" style={{ marginRight: "5px" }} /></label>
                                    <Button data_testid="idBtnComplete" onClick={this.CreateLinkedList} name={"Add"} />
                                </div>
                            </fieldset>
                            {/* <fieldset>
                                <legend>Linked List Options</legend>
                                <div className="">
                                    <fieldset>
                                        <legend>Linked List Operations</legend>
                                        <div className="col4_Alt">
                                            <div className="col2"><LLOptions /> <label><Input id="idselectView" type="checkBox" />Switch View</label></div>
                                            <Input id="idSllOps" type="text" style={{ marginRight: "5px" }} />
                                            <Button data_testid="idBtnComplete" onClick={this.handleLinkedList} name={"Complete"} />
                                            <div></div>
                                        </div>
                                    </fieldset>
                                </div>
                            </fieldset> */}
                            {/* <fieldset>
                                <legend>Linked List</legend>
                                <pre className="LLDisplay" id="logger"></pre>
                                <hr style={{ height: "2px", borderWidth: "1px", color: "gray", backgroundColor: "gray" }} />
                                <div id="idLLFlowDiagram">
                                    <fieldset>
                                        <legend>Linked List Diagram Flow</legend>
                                        <CreateLLCard linkedList={this.state.LL} />
                                    </fieldset>
                                </div>

                            </fieldset> */}
                        </div>
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}


export function LLOptions() {
    return <div>
        <select id="idSelect">
            <option value="select">--Select--</option>
            <option value="getSize">Get Size</option>
            <option value="indexOfData">Index Of Data</option>
            <option value="dataAt">Data at Index</option>
            <option value="removeData">Remove Data</option>
            <option value="insertDataAt">Insert Data At</option>
            <option value="removeDataAt">Remove Data At</option>
            <option value="printData">Print All Data</option>
            <option value="clearData">Clear All Data</option>
            <option value="displayLL">Display Linked List</option>
        </select>

    </div>
}
//========= Print Console Log on Div ==================
//========= Method 1 ==================
// const printLL = () => {
//     (function () {
//         let old = console.log;
//         let logger = document.getElementById('logger');
//         console.log = function (message) {

//             if (typeof message === 'object') {
//                 logger.innerHTML = (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<hr/>';
//             } else {
//                 logger.innerHTML = message + '<hr/>';
//             }
//             old(message);

//         }
//     })();
// }


//============== Method 3 ===================

// const printLL = () => {
//     (function () {
//         // let old = console.log;
//         let logger = document.getElementById('logger');
//         let LL = "";
//         console.log = function () {
//             // for (let i = 0; i < arguments.length; i++) {
//             if (typeof arguments[0] === 'object') {
//                 LL = (JSON && JSON.stringify ? JSON.stringify(arguments[0], undefined, 2) : arguments[0]);
//             }
//             else if (typeof arguments[0] !== 'object') {
//                 LL = arguments[0];
//             }
//             // }logger.innerHTML
//             const listNode = document.createElement("P");
//             listNode.appendChild(document.createTextNode(LL));
//             logger.appendChild(listNode);

//             // old.apply(undefined, arguments);
//         }
//     })();
// }
const printLL1 = () => {
    (function () {
        // let old = console.log;
        let logger = document.getElementById('logger');

        console.log = function () {
            for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === 'object') {
                    logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<hr />';
                }
                else if (typeof arguments[i] !== 'object') {
                    logger.innerHTML += arguments[i] + '<hr />';
                }
            }
            // old.apply(undefined, arguments);
        }
    })();

}
const printLL2 = () => {
    (function () {
        // let old = console.log;
        let logger = document.getElementById('logger');

        console.log = function () {
            for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === 'object') {
                    logger.innerHTML = (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<hr />';
                }
                else if (typeof arguments[i] !== 'object') {
                    logger.innerHTML = arguments[i] + '<hr />';
                }
            }
            // old.apply(undefined, arguments);
        }
    })();

}
