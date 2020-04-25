import React from 'react';
import './Account.css'

function ButtonAccordion(props) {
    return (
        <button className={props.class} onClick={props.onClick} style={props.style}>
            {props.name}
        </button>
    )
}

export default ButtonAccordion;