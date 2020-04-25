import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <input className={this.props.class} id={this.props.id} type="text" placeholder={this.props.placeholder} onChange={this.props.onChange}
                value={this.props.inputValue} readOnly={this.props.readOnly} />
        );
    }
}

export default InputField;