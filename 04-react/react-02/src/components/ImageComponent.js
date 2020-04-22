import React, { Component } from 'react';
import Img from 'react-image';

class ImageComponent extends Component {
    render() {
        return (
            <span><Img src={this.props.customerPicture} id="imgs" alt="CustomerImage" width="180px" height="140px" /></span>
            // <img src="./src/pictures/img9.jpg" id="imgs" alt="" width="180px" height="140px" />
        );
    }
}

export default ImageComponent;