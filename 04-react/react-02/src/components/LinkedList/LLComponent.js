import React, { Component } from 'react';
import _LinkedList from './_LinkedList.js'
import SelectDataType from './SelectDataType.js'
import { Input, Button } from './Input.js'
import { ThemeContext } from '../../context/ThemeContext';
import './LL.css'
import CreateLLCard from './CreateLLCard.js';

export class LLComponent extends Component {
    constructor(props) {
        super(props);
        this.sll = new _LinkedList();
        this.state = {
            LL: [],
            position: 0
        }
        this.llArray = [];
    }

    handleLinkedList = () => {
        const inputValdata = document.getElementById("idSll");
        const idSelectDataType = document.getElementById("idSelectDataType");
        const inputValBool = document.getElementById("idSllBool");
        const selectVal = document.getElementById("idSelect");
        const selectView = document.getElementById("idselectView");
        selectView.checked ? printLL1() : printLL2();

        if (selectVal.value === "getSize") {
            console.log(`Linked list size is: ${this.sll.size()}`);
        }
        else if (selectVal.value === "clearData") {
            this.sll.clearData();
            this.setState({
                LL: this.sll.printData(),
                position: "head"
            })
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "displayLL") {
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "printData") {
            console.log(this.sll.printData());
        }
        else if (selectVal.value === "indexOfData") {
            console.log(`index of ${this.state.LL[this.state.position]} is ${this.sll.indexOf(this.state.LL[this.state.position])}`);
        }
        else if (selectVal.value === "dataAt") {
            console.log(`Data at index of ${this.state.position} is ${this.sll.dataAt(this.state.position)}`);
        }
        else if (selectVal.value === "insertDataAt") {
            inputValdata.style.display !== "none" ?
                ((idSelectDataType.value === "array") ? this.sll.insertAt(this.state.position, this.llArray) : this.sll.insertAt(this.state.position, inputValdata.value))
                : this.sll.insertAt(this.state.position, inputValBool.value);
            this.setState({
                LL: this.sll.printData()
            })
            console.log(this.sll.displayData());
        }
        else if (selectVal.value === "removeDataAt") {
            this.sll.removeAt(this.state.position);
            this.setState({
                LL: this.sll.printData()
            })
            console.log(this.sll.displayData());
        }
    }
    CreateLinkedList = () => {
        const inputVal = document.getElementById("idSll");
        const inputValBool = document.getElementById("idSllBool");
        const idSelectDataType = document.getElementById("idSelectDataType");
        this.llArray.unshift("[");
        this.llArray.push("]")
        inputVal.style.display !== "none" ?
            ((idSelectDataType.value === "array") ? this.sll.add(this.llArray) : this.sll.add(inputVal.value))
            : this.sll.add(inputValBool.value);

        this.setState({
            LL: this.sll.printData()
        })
        this.llArray = [];
    }
    CreateLinkedListArray = () => {
        const inputVal = document.getElementById("idSll");
        this.llArray.push(inputVal.value);
    }
    setCurrentNode = (e) => {
        const divEl = document.getElementById(this.state.position);
        divEl.className = divEl.className.replace(" divGlow", "");
        this.setState({
            position: parseInt(e.target.id)
        })
        e.target.className += " divGlow";
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
                                <legend>Select Type Of Data to Enter</legend>
                                <div>
                                    <SelectDataType onClick={this.CreateLinkedList} onClickArray={this.CreateLinkedListArray} />
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Linked List Options</legend>
                                <div className="">
                                    <fieldset>
                                        <legend>Linked List Operations</legend>
                                        <div className="col3">
                                            <div className="col2"><LLOptions /> <label><Input id="idselectView" type="checkBox" />Switch Display View</label></div>
                                            {/* <Input id="idSllOps" type="text" style={{ marginRight: "5px" }} /> */}
                                            <Button data_testid="idBtnComplete" onClick={this.handleLinkedList} name={"Complete"} />
                                            <div>Node Position: <b>{`Node ${this.state.position}`}</b></div>
                                        </div>
                                    </fieldset>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Linked List</legend>
                                <div id="idLLFlowDiagram">
                                    <fieldset>
                                        <legend>Linked List Diagram Flow</legend>
                                        <CreateLLCard linkedList={this.state.LL} onClickLLNode={this.setCurrentNode} />
                                    </fieldset>
                                </div>
                                <hr style={{ height: "2px", borderWidth: "1px", color: "gray", backgroundColor: "gray" }} />
                                <pre className="LLDisplay" id="logger"></pre>
                            </fieldset>
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
