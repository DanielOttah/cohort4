import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <input id={this.props.id} type="text" placeholder={this.props.placeholder} />
        );
    }
}

export default InputField;