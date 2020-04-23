import React, { Component } from 'react';

export class Select extends Component {
    render() {

        const listItem = this.props.list.map((items, index) =>
            <ListItem key={index.toString()} value={items} />
        )
        return (
            <select className={this.props.class} value={this.props.selectedValue} id={this.props.id} onChange={this.props.onChange}>
                <option>Select</option>
                {listItem}
            </select>
        );

    }
}

function ListItem(props) {
    return <option>{props.value}</option>
}


