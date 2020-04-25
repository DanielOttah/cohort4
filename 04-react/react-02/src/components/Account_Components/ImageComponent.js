import React, { Component } from 'react';

class ImageComponent extends Component {

    render() {

        return (
            <div style={this.props.style}>
                <span ><img className="displayed" src={this.props.customerPicture} id="imgs" alt="CustomerImage" width={this.props.width} height={this.props.height} /></span>

            </div>
        );
    }
}

export default ImageComponent;