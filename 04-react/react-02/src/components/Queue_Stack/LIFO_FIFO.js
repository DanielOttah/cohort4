import React, { Component } from 'react';
import './LIFO_FIFO.css'
// import { LIFOFIFOFunctionExample } from './LIFO_FIFO_Function_Example.js';
import { LIFOFIFOClassExample } from './LIFO_FIFO_Class_Example.js';
import { FIFOAnimation, LIFOAnimation } from './Animation.js';
import { ThemeContext } from '../../context/ThemeContext';
// import { Settings } from '../Settings/Settings';

class LIFO_FIFO extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                console.log(context)
                const { isLightTheme, light, dark } = context;
                const currentTheme = isLightTheme ? light : dark;
                return (
                    <div className="bodySettings" style={{ background: currentTheme.ui, color: currentTheme.textColor }}>
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
                            {/* <Settings /> */}
                            <fieldset>
                                <legend><b> OPERATIONS</b></legend>
                                {/* <LIFOFIFOFunctionExample /> */}
                                <LIFOFIFOClassExample />

                            </fieldset>
                        </div>
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}

export default LIFO_FIFO;