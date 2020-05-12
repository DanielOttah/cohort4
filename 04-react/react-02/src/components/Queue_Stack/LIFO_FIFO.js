import React, { Component } from 'react';
import './LIFO_FIFO.css'
// import { LIFOFIFOFunctionExample } from './LIFO_FIFO_Function_Example.js';
import { LIFOFIFOClassExample } from './LIFO_FIFO_Class_Example.js';
import { FIFOAnimation, LIFOAnimation } from './Animation.js';

class LIFO_FIFO extends Component {

    render() {
        return (
            <div className="container">
                <div className="col2">
                    <fieldset>
                        <legend><b> QUEUE - FIFO Animation</b></legend>
                        <div className="divHeight" id="">
                            <FIFOAnimation />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend><b>STACK - LIFO Animation</b></legend>
                        <div className="divHeight" id="" >
                            <LIFOAnimation />
                        </div>
                    </fieldset>
                </div>
                <fieldset>
                    <legend><b> OPERATIONS</b></legend>
                    {/* <LIFOFIFOFunctionExample /> */}
                    <LIFOFIFOClassExample />

                </fieldset>
            </div>
        );
    }
}

export default LIFO_FIFO;