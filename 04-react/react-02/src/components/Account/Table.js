import React, { Component } from 'react';
import './Account.css';

export class Table extends Component {

    render() {
        const listItem = this.props.accList.map((items, index) =>
            <AccountList key={index.toString()} value={items} />
        )
        return (
            <table>
                <tbody>
                    <tr><th>Accounts</th>
                        <th>Current Balance ($CAD)</th>
                    </tr>
                    {listItem}
                </tbody>
            </table>
        );
    }
}

function AccountList(props) {
    return <tr><td>{props.value[0]}</td>
        <td>{props.value[1]}</td>
    </tr>

}