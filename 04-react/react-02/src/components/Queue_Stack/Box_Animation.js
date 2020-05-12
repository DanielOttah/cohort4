import React, { Component } from 'react';
import { Button } from './Input.js';
import './LIFO_FIFO.css'

class BoxAnimation extends Component {

    handleAnime = () => {
        let item = document.getElementById("childFIFO")
        item.animate([
            { transform: 'scale(1)', background: 'red', opacity: 1, offset: 0 },
            { transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: 0.5, offset: 0.2 },
            { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: 1, offset: 1 },
        ],
            {
                duration: 2000,
                easing: 'ease-in-out',
                delay: 10,
                iterations: Infinity,
                direction: 'alternate',
                fill: 'forwards'
            });
    }//
    render() {
        return (
            <div>
                <Button onClick={this.handleAnime} name={"anime"} />

                <div className="" id="idFIFO">
                    <div id="childFIFO"></div>
                </div>
            </div>
        );
    }
}

export default BoxAnimation;