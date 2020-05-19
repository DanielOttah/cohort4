import React, { Component } from 'react';
import './LL.css'

class CreateLLCard extends Component {
    render() {
        const llItem = this.props.linkedList.map((items, index) =>
            <LLCard key={index.toString()} value={items} ind={index} onClick={this.props.onClickLLNode} />
        )
        return (
            <div style={{ display: "inline-block" }}>
                <div>Head →</div>
                {llItem}
                null
            </div>
        );
    }
}

export default CreateLLCard;

function LLCard(props) {
    return (<div className="col2_LL" id={`id${props.ind}`} onClick={props.onClick}>
        <div className={`${(props.ind === 0) ? "LLcard divGlow" : "LLcard"}`} id={`${props.ind}`}>{`Node ${props.ind}: ${props.value}`} </div>
        <div className="LLcardLink"> →</div>
    </div>)
}