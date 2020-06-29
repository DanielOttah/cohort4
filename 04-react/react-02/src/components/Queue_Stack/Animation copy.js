import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Button } from './Input.js';

export class FIFOAnimation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            process: 1,
            btnName: "Enqueue"
        }
    }
    getKeyFrameFIFO = () => {
        let keyFrame;
        switch (this.state.process) {
            case 1:
                keyFrame = [{ translateY: -40 }, { translateX: 100 }, { translateY: 140 },]
                break;
            case 2:
                keyFrame = [{ translateY: -50 }, { translateX: 100 }, { translateY: 70 },]
                break;
            case 3:
                keyFrame = [{ translateY: -60 }, { translateX: 100 }, { translateY: 0 },]
                break;
            case 4:
                keyFrame = [{ translateY: -70 }, { translateX: 100 }, { translateY: -70 },]
                break;
            case 5:
                keyFrame = [{ translateY: -140 }, { translateX: 100 }, { translateY: -140 },]
                break;
            case 6:
                keyFrame = [{ translateX: 200 }, { translateY: 0 },]
                break;
            case 7:
                keyFrame = [{ translateY: 100 }, { translateX: 200 }, { translateY: 0 },]
                break;
            case 8:
                keyFrame = [{ translateY: 100 }, { translateX: 200 }, { translateY: 0 },]
                break;
            case 9:
                keyFrame = [{ translateY: 100 }, { translateX: 200 }, { translateY: 0 },]
                break;
            case 10:
                keyFrame = [{ translateY: 80 }, { translateX: 200 }, { translateY: 0 },]
                break;
            default:

        }
        return keyFrame;
        // if (this.state.process === 1) {
        //     keyFrame= [{ translateY: -40 }, { translateX: 100 }, { translateY: 140 },]
        // }
        // else if (this.state.process === 2) {
        //     keyFrame= [{ translateY: -50 }, { translateX: 100 }, { translateY: 70 },]
        // }
        // else if (this.state.process === 3) {
        //     keyFrame= [{ translateY: -60 }, { translateX: 100 }, { translateY: 0 },]
        // }
        // else if (this.state.process === 4) {
        //     keyFrame= [{ translateY: -70 }, { translateX: 100 }, { translateY: -70 },]
        // }
        // else if (this.state.process === 5) {
        //     keyFrame= [{ translateY: -140 }, { translateX: 100 }, { translateY: -140 },]
        // }
        // else if (this.state.process === 6) {
        //     keyFrame= [{ translateX: 200 }, { translateY: 0 },]
        // }
        // else if (this.state.process === 7) {
        //     keyFrame= [{ translateY: 100 }, { translateX: 200 }, { translateY: 0 },]
        // }
        // else if (this.state.process === 8) {
        //     keyFrame= [{ translateY: 100 },{ translateX: 200 },{ translateY: 0 },]
        // }
        // else if (this.state.process === 9) {
        //     keyFrame= [{ translateY: 100 },{ translateX: 200 },{ translateY: 0 },]
        // }
        // else if (this.state.process === 10) {
        //     keyFrame= [{ translateY: 80 },{ translateX: 200 },{ translateY: 0 },]
        // }

    }
    handleLoadAnimation = () => {

        // console.log(this.state.counter);
        // console.log(this.state.process);

        anime({
            targets: `.animjs${this.state.counter}`,
            keyframes: this.getKeyFrameFIFO(),
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });

        this.setState({
            counter: this.state.counter + 1,
            process: this.state.process + 1
        })
        if (this.state.counter === 5) {
            this.setState({
                counter: 1,
                btnName: "Dequeue"
            })
        }
        if (this.state.process === 10) {
            this.setState({ btnName: 'Enqueue' })
        }
    }


    render() {
        return (
            <div>
                <Button id="" onClick={this.handleLoadAnimation} name={this.state.btnName} style={{ marginBottom: "50px", display: "inline-block" }} />

                <div className="animjs1">Task 1</div>
                <div className="animjs2">Task 2</div>
                <div className="animjs3">Task 3</div>
                <div className="animjs4">Task 4</div>
                <div className="animjs5">Task 5</div>
            </div>
        );
    }
}


export class LIFOAnimation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            process: 1,
            btnName: "Stack"
        }
    }

    getKeyFrameLIFO = () => {
        let keyFrame;
        switch (this.state.process) {
            case 1:
                keyFrame = [{ translateY: -40 }, { translateX: 100 }, { translateY: 140 },]
                break;
            case 2:
                keyFrame = [{ translateY: -50 }, { translateX: 100 }, { translateY: 70 },]
                break;
            case 3:
                keyFrame = [{ translateY: -60 }, { translateX: 100 }, { translateY: 0 },]
                break;
            case 4:
                keyFrame = [{ translateY: -70 }, { translateX: 100 }, { translateY: -70 },]
                break;
            case 5:
                keyFrame = [{ translateY: -140 }, { translateX: 100 }, { translateY: -140 },]
                break;
            case 6:
                keyFrame = [{ translateX: 200 }, { translateY: 0 },]
                break;
            case 7:
                keyFrame = [{ translateX: 200 }, { translateY: 0 },]
                break;
            case 8:
                keyFrame = [{ translateY: -60 }, { translateX: 200 }, { translateY: 0 },]
                break;
            case 9:
                keyFrame = [{ translateY: -80 }, { translateX: 200 }, { translateY: 0 },]
                break;
            case 10:
                keyFrame = [{ translateY: -100 }, { translateX: 200 }, { translateY: 0 },]
                break;
            default:

        }
        return keyFrame;
    }

    handleLoadAnimation = () => {
        anime({
            targets: `.animjs_${this.state.counter}`,
            keyframes: this.getKeyFrameLIFO(),
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        if (this.state.process < 5) {
            this.setState({
                counter: this.state.counter + 1,
                process: this.state.process + 1
            })
        }
        else {
            this.setState({
                counter: this.state.counter - 1,
                process: this.state.process + 1
            })
        }
        if (this.state.process === 5) {
            this.setState({
                btnName: "Destack",
                counter: 5
            })
        }
        if (this.state.process === 10) {
            this.setState({ btnName: 'Stack' })
        }


    }

    render() {
        return (
            <div>
                <Button id="" onClick={this.handleLoadAnimation} name={this.state.btnName} style={{ marginBottom: "50px", display: "inline-block" }} />

                <div className="animjs_1">Task 1</div>
                <div className="animjs_2">Task 2</div>
                <div className="animjs_3">Task 3</div>
                <div className="animjs_4">Task 4</div>
                <div className="animjs_5">Task 5</div>
            </div>
        );
    }
}






