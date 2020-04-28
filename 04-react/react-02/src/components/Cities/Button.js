import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className={this.props.className} id={this.props.id} onClick={this.props.onClick} style={this.props.style}>{this.props.name}</button>
        );
    }
}

export default Button;