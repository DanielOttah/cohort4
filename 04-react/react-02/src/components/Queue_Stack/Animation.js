import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Button } from './Input.js';

export class FIFOAnimation extends Component {
    handleLoadAnimation1 = () => {
        anime({
            targets: `.animjs1`,
            keyframes: [
                { translateY: -40 },
                { translateX: 100 },
                { translateY: 140 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "inline-block";
    }
    handleLoadAnimation2 = () => {
        anime({
            targets: `.animjs2`,
            keyframes: [
                { translateY: -50 },
                { translateX: 100 },
                { translateY: 70 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn2").style.display = "none";
        document.getElementById("btn3").style.display = "inline-block";
    }
    handleLoadAnimation3 = () => {
        anime({
            targets: `.animjs3`,
            keyframes: [
                { translateY: -60 },
                { translateX: 100 },
                { translateY: 0 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn3").style.display = "none";
        document.getElementById("btn4").style.display = "inline-block";
    }
    handleLoadAnimation4 = () => {
        anime({
            targets: `.animjs4`,
            keyframes: [
                { translateY: -70 },
                { translateX: 100 },
                { translateY: -70 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn4").style.display = "none";
        document.getElementById("btn5").style.display = "inline-block";
    }
    handleLoadAnimation5 = () => {
        anime({
            targets: `.animjs5`,
            keyframes: [
                { translateY: -140 },
                { translateX: 100 },
                { translateY: -140 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn5").style.display = "none";
        document.getElementById("btn_1").style.display = "inline-block";
    }
    handleUnLoadAnimation1 = () => {
        anime({
            targets: '.animjs1',
            keyframes: [
                // { translateY: 140 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn_1").style.display = "none";
        document.getElementById("btn_2").style.display = "inline-block";
    }
    handleUnLoadAnimation2 = () => {
        anime({
            targets: '.animjs2',
            keyframes: [
                { translateY: 100 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn_2").style.display = "none";
        document.getElementById("btn_3").style.display = "inline-block";

    }
    handleUnLoadAnimation3 = () => {
        anime({
            targets: '.animjs3',
            keyframes: [
                { translateY: 100 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn_3").style.display = "none";
        document.getElementById("btn_4").style.display = "inline-block";

    }
    handleUnLoadAnimation4 = () => {
        anime({
            targets: '.animjs4',
            keyframes: [
                { translateY: 100 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn_4").style.display = "none";
        document.getElementById("btn_5").style.display = "inline-block";

    }
    handleUnLoadAnimation5 = () => {
        anime({
            targets: '.animjs5',
            keyframes: [
                { translateY: 80 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btn_5").style.display = "none";
        document.getElementById("btn1").style.display = "inline-block";

    }

    render() {
        return (
            <div>
                <Button id="btn1" onClick={this.handleLoadAnimation1} name={"Enqueue 1"} style={{ marginBottom: "50px", display: "inline-block" }} />
                <Button id="btn2" onClick={this.handleLoadAnimation2} name={"Enqueue 2"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn3" onClick={this.handleLoadAnimation3} name={"Enqueue 3"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn4" onClick={this.handleLoadAnimation4} name={"Enqueue 4"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn5" onClick={this.handleLoadAnimation5} name={"Enqueue 5"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn_1" onClick={this.handleUnLoadAnimation1} name={"Dequeue"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn_2" onClick={this.handleUnLoadAnimation2} name={"Dequeue"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn_3" onClick={this.handleUnLoadAnimation3} name={"Dequeue"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn_4" onClick={this.handleUnLoadAnimation4} name={"Dequeue"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btn_5" onClick={this.handleUnLoadAnimation5} name={"Dequeue"} style={{ marginBottom: "50px", display: "none" }} />
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
    handleLoadAnimation1 = () => {
        anime({
            targets: `.animjs_1`,
            keyframes: [
                { translateY: -40 },
                { translateX: 100 },
                { translateY: 140 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO1").style.display = "none";
        document.getElementById("btnLIFO2").style.display = "inline-block";
    }
    handleLoadAnimation2 = () => {
        anime({
            targets: `.animjs_2`,
            keyframes: [
                { translateY: -50 },
                { translateX: 100 },
                { translateY: 70 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO2").style.display = "none";
        document.getElementById("btnLIFO3").style.display = "inline-block";
    }
    handleLoadAnimation3 = () => {
        anime({
            targets: `.animjs_3`,
            keyframes: [
                { translateY: -60 },
                { translateX: 100 },
                { translateY: 0 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO3").style.display = "none";
        document.getElementById("btnLIFO4").style.display = "inline-block";
    }
    handleLoadAnimation4 = () => {
        anime({
            targets: `.animjs_4`,
            keyframes: [
                { translateY: -70 },
                { translateX: 100 },
                { translateY: -70 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO4").style.display = "none";
        document.getElementById("btnLIFO5").style.display = "inline-block";
    }
    handleLoadAnimation5 = () => {
        anime({
            targets: `.animjs_5`,
            keyframes: [
                { translateY: -140 },
                { translateX: 100 },
                { translateY: -140 },
            ],
            duration: 500,
            // rotateZ: 360,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO5").style.display = "none";
        document.getElementById("btnLIFO_1").style.display = "inline-block";
    }
    handleUnLoadAnimation1 = () => {
        anime({
            targets: '.animjs_5',
            keyframes: [
                // { translateY: -45 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO_1").style.display = "none";
        document.getElementById("btnLIFO_2").style.display = "inline-block";
    }
    handleUnLoadAnimation2 = () => {
        anime({
            targets: '.animjs_4',
            keyframes: [
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO_2").style.display = "none";
        document.getElementById("btnLIFO_3").style.display = "inline-block";

    }
    handleUnLoadAnimation3 = () => {
        anime({
            targets: '.animjs_3',
            keyframes: [
                { translateY: -60 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO_3").style.display = "none";
        document.getElementById("btnLIFO_4").style.display = "inline-block";

    }
    handleUnLoadAnimation4 = () => {
        anime({
            targets: '.animjs_2',
            keyframes: [
                { translateY: -80 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO_4").style.display = "none";
        document.getElementById("btnLIFO_5").style.display = "inline-block";

    }
    handleUnLoadAnimation5 = () => {
        anime({
            targets: '.animjs_1',
            keyframes: [
                { translateY: -100 },
                { translateX: 200 },
                { translateY: 0 },
            ],
            duration: 500,
            easing: 'easeOutElastic(1, .8)',
        });
        document.getElementById("btnLIFO_5").style.display = "none";
        document.getElementById("btnLIFO1").style.display = "inline-block";

    }

    render() {
        return (
            <div>
                <Button id="btnLIFO1" onClick={this.handleLoadAnimation1} name={"Stack 1"} style={{ marginBottom: "50px", display: "inline-block" }} />
                <Button id="btnLIFO2" onClick={this.handleLoadAnimation2} name={"Stack 2"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO3" onClick={this.handleLoadAnimation3} name={"Stack 3"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO4" onClick={this.handleLoadAnimation4} name={"Stack 4"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO5" onClick={this.handleLoadAnimation5} name={"Stack 5"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO_1" onClick={this.handleUnLoadAnimation1} name={"De-Stack"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO_2" onClick={this.handleUnLoadAnimation2} name={"De-Stack"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO_3" onClick={this.handleUnLoadAnimation3} name={"De-Stack"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO_4" onClick={this.handleUnLoadAnimation4} name={"De-Stack"} style={{ marginBottom: "50px", display: "none" }} />
                <Button id="btnLIFO_5" onClick={this.handleUnLoadAnimation5} name={"De-Stack"} style={{ marginBottom: "50px", display: "none" }} />
                <div className="animjs_1">Task 1</div>
                <div className="animjs_2">Task 2</div>
                <div className="animjs_3">Task 3</div>
                <div className="animjs_4">Task 4</div>
                <div className="animjs_5">Task 5</div>
            </div>
        );
    }
}






