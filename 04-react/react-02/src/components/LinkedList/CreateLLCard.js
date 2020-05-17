import React, { Component } from 'react';
import './LL.css'

class CreateLLCard extends Component {
    render() {
        // console.log(this.props.linkedList);
        const llItem = this.props.linkedList.map((items, index) =>
            <LLCard key={index.toString()} value={items} ind={index} onClick={this.props.onClickLLNode} />
        )
        // const llItem = this.props.array1.map((items, index) =>
        //     <LLCard key={index.toString()} value={items} ind={index} />
        // )
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

// function LLCard(props) {
//     return <div>{props.value}</div>;
// }
function LLCard(props) {
    return (<div className="col2_LL" id={`id${props.ind}`} onClick={props.onClick}>
        <div className="LLcard" id={`${props.ind}`}>{`Node ${props.ind}: ${props.value}`}</div>
        <div className="LLcardLink"> →</div>
    </div>)
}