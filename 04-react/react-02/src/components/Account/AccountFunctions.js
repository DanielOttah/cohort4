import React from 'react';
import Button from './Button.js'
import InputField from './InputField.js'
import { Select } from './Select.js'

export const CurrentCash = (props) => {
    return (
        <fieldset>
            <legend ><b>Current Cash</b></legend>
            <InputField inputValue={props.inputValue} readOnly={props.readOnly} />
        </fieldset>
    );
}
export const AccountServices = (props) => {
    return (
        <div>
            <fieldset>
                <legend ><b>Accounts Services</b></legend>
                <div className={props.class}>
                    <div style={{ backgroundColor: "#094" }}><b>Print Statement</b></div>
                    <div style={{ backgroundColor: "#595" }}><b>Apply for Credit Increase</b> </div>
                    <div style={{ backgroundColor: "#679" }}><b>Check Credit Score</b></div>
                    <div style={{ backgroundColor: "#684" }}><b>Redeem Points</b></div>
                </div>
            </fieldset>
        </div>
    );

}
export const SectionAllAccount = (props) => {
    return (
        <div>
            <Select className={props.selectClass} value={props.selectValue} id={props.selectId}
                onChange={props.selectOnChange} list={props.selectList} />

            <Button name={props.name1} onClick={props.onClick1} style={props.style1} />
            <Button name={props.name2} onClick={props.onClick2} style={props.style2} />
            <div className={props.class} id={props.id}>
                <InputField inputClass={props.inputClass} inputValue={props.inputValue} onChange={props.onChange}
                    placeholder={props.placeholder} readOnly={props.readOnly} />
                <Button name={props.btnName} onClick={props.onClick} />
            </div>
        </div>
    );
}
export const TotalCash = (props) => {
    return (
        <fieldset>
            <legend ><b>Total Cash</b></legend>
            <InputField inputValue={props.inputValue} readOnly={props.readOnly} />
        </fieldset>
    );
}
export const AddNewAccount = (props) => {
    return (
        <div id={props.divId} className={props.div1Class}>
            <div className={props.div2Class}>
                <InputField id={props.input1Id} placeholder={props.input1placeholder} />
                <InputField id={props.input2Id} placeholder={props.input2placeholder} />
                <InputField id={props.input3Id} placeholder={props.input3placeholder} />
                <Button name={props.name} onClick={props.onClick} />
            </div>
        </div>
    );
}
export const SelectTransaction = () => {
    return (<div>
        <label> Select Transaction:
<select id="selectTransaction">
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
                <option value="transfer">Transfer</option>

            </select>
        </label>
    </div>);
}