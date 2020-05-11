import React, { Component } from 'react';
import { Input, Button } from './Input.js'

class SelectDataType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputType: "",
            displayInput: "none",
            displaySelect: "none",
            displayArrayBtn: "none"
        }

    }
    hanldeSelectDataType = () => {
        const selectDataType = document.getElementById("idSelectDataType")
        if (selectDataType.value === "select") {
            this.setState({
                displayInput: "none",
                displaySelect: "none",
                displayArrayBtn: "none"
            })
        }
        if (selectDataType.value === "text") {
            this.setState({
                inputType: "text",
                displayInput: "block",
                displaySelect: "none",
                displayArrayBtn: "none"
            })
        }
        if (selectDataType.value === "number") {
            this.setState({
                inputType: "number",
                displayInput: "block",
                displaySelect: "none",
                displayArrayBtn: "none"
            })
        }
        if (selectDataType.value === "boolean") {
            this.setState({
                inputType: "text",
                displayInput: "none",
                displaySelect: "block",
                displayArrayBtn: "none"
            })
        }
        if (selectDataType.value === "array") {
            this.setState({
                inputType: "text",
                displayInput: "block",
                displaySelect: "none",
                displayArrayBtn: "block"
            })
        }
        if (selectDataType.value === "dictionary") {
            console.log("Seeing dictionary");
        }
    }

    render() {
        return (
            <div className="col4">
                <SelectDataTypeOPtions onChange={this.hanldeSelectDataType} />
                <Input id="idSll" type={this.state.inputType} style={{ marginRight: "5px", display: this.state.displayInput }} />
                <SelectBoolOPtions display={this.state.displaySelect} />
                <Button onClick={this.props.onClickArray} style={{ marginRight: "5px", display: this.state.displayArrayBtn }} name={"Add to Array"} />
                <Button onClick={this.props.onClick} style={{ marginRight: "5px" }} name={"Add to LinkedList"} />

            </div>
        );
    }
}

export default SelectDataType;

const SelectDataTypeOPtions = (props) => {
    return <select id="idSelectDataType" onChange={props.onChange} style={{ marginRight: "5px" }} >
        <option value="select">--Select--</option>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="array">Array</option>
        <option value="dictionary">Dictionary</option>
    </select>
}
const SelectBoolOPtions = (props) => {
    return <select id="idSllBool" style={{ marginRight: "5px", display: props.display }} >
        <option value="select">--Select--</option>
        <option value="true">True</option>
        <option value="false">False</option>
    </select>
}

