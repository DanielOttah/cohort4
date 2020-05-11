import React from 'react';

export const Input = (props) => {
    return <input className={props.className} id={props.id} type={props.type} style={props.style}
        onChange={props.onChange} value={props.inputValue} />

}

export const Button = (props) => {
    return <button className={props.className} id={props.id} style={props.style} onClick={props.onClick} >{props.name}</button>

}