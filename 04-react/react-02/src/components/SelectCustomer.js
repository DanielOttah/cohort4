import React, { Component } from 'react';

export class SelectCustomer extends Component {
    render() {
        const listItem = this.props.customerList.map((items, index) =>
            <ListItem key={index.toString()} value={items} />
        )
        return (
            <select value={this.props.selectedValue} id={this.props.id} onChange={this.props.onChange}>
                <option>Select</option>
                {listItem}
            </select>
        );

    }
}

function ListItem(props) {
    return <option>{props.value.Name}</option>
}


