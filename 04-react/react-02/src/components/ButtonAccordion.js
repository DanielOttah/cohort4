import React from 'react';
import './Account.css'

function ButtonAccordion(props) {
    return (
        <button className={props.accordion} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default ButtonAccordion;