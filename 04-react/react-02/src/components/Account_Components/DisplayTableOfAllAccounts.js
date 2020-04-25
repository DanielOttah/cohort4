import React, { Component } from 'react';
import { Table } from './Table.js';

class DisplayTableOfAllAccounts extends Component {
    render() {
        return (
            <div style={{ marginBottom: "5px" }}>
                <fieldset>
                    <legend >All of {this.props.accountName} Accounts</legend>
                    <Table accList={this.props.accList} />
                </fieldset>
            </div>
        );
    }
}

export default DisplayTableOfAllAccounts;