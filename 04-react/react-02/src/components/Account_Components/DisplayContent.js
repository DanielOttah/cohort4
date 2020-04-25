import React, { Component } from 'react';
import './Account.css'

class DisplayContent extends Component {
    render() {
        return (
            <div className="boder_line center_text" style={this.props.style}>
                {this.props.content}
            </div>
        );
    }
}

export default DisplayContent;