import React, { Component } from 'react';

class CityInputField extends Component {
    render() {
        return (
            <input type={this.props.type} id={this.props.id} value={this.props.value} onChange={this.props.onChange} placeholder={`Enter ${this.props.placeholder} here`} />
        );
    }
}

export default CityInputField;