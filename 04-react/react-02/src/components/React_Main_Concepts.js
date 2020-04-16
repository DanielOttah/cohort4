import React, { Component } from 'react';


class React_Main_Concepts extends Component {

    formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
        // return user.firstName + ' ' + user.lastName;
    }
    user = {
        firstName: 'Magnus',
        lastName: 'Archibald'
    }

    introJSX() {
        // let tym = new Date().toLocaleTimeString();  
        if (this.user) {
            return <h1>Hello, {this.formatName(this.user)}! It is {<Clock />} in Airdrie Alberta now.</h1>;
        }
        return <h1>Hello, Stranger!</h1>;
    }

    render() {
        return (
            <div>
                {this.introJSX()}
            </div>
        );
    }
}
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({ date: new Date() })
    }
    render() {
        return this.state.date.toLocaleTimeString();
    }
}
export default React_Main_Concepts;


//12 Main Concepts in React
// 1. Hello World
// 2. Introducing JSX
// 3. Rendering Elements
// 4. Components and Props
// 5. State and Lifecycle
// 6. Handling Events
// 7. Conditional Rendering
// 8. Lists and Keys
// 9. Forms
// 10. Lifting State Up
// 11. Composition vs Inheritance
// 12. Thinking In React

//=====JSX=====
//What is JSX - This is an extension of javaScript syntax e.g. 'element' in introJSX()
// Why was JSX created - To provide another option to 'separating technologies' by 'separating concerns' instead of separating the logic and markup in taditional js
// Benefits - It can help in visual aid of the UI; 
//          - helps in XSS -'cross-site' scripting attacks;
//          - hekps write bug-free code
// Drawbacks - It can be confusing with traditional js as markup and logic are mixed;

//=====RENDERING=====
//What is rendering - Updating the react dom to match the react elements then displaying the changes to the browser
//How does React update only what’s needed - By comparing the react elements to previous ones i.e. previous state 

//====== COMPONENTS ========
//How do you compose and extract components? Components are composed as either functions or class and can be extracted by splitting larger components into smaller ones
//why do you compose and extract components? Components are composed and extracted so they can be re-usable.

//=== PURE FUNCTION ======
//What is a pure function? - They are functions that do not attempt to change the input and always return result for the same input.

//======STATES ========
//What are the rules of working with the state? 
        // They are not to be modified directly, instead, 'setState()' is used;
        // Only in the constructor can setState be assigned;
        // 
// Why are they such? 
        // If modified directly, React-Dom wouldn't render it;

//======= LIFE-CYCLE METHODS ===================
//What are some of the common life cycle methods in React? When would you use them?
        // componentDidMount - The method is called after render() and used to 'mount' codes that need to be ran
        // componentWillUnmount - the method runs code to 'unmounts' components or elements that have been removed from the code 

//=========== CONDITIONAL RENDERING ==============
//What is conditional rendering? Rendering a component based on one or multiple conditions
// How can you prevent a component from rendering? the render method in the cpomponent should return 'null'
//How can you render an array of components in React? 
