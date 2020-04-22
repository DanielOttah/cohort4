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
        // It can be rendered using curly braces and 'mapped' through e.g. 
        // if we have an array - const numbers = [1, 2, 3, 4, 5];
        //nb 'Keys' are important when working with list/array of components 'cos it helps React identify which items have changed, are added, or are removed
        // We map through to create a list of element - const listItems = numbers.map((number) => <li keys={number.toString()}>{number}</li>); 
        // Render listItems in the React-DOM unfer <ul> tag - ReactDOM.render(<ul>{listItems}</ul>,document.getElementById('root'));

// How can you extract components with keys? Since the 'key' attribute cannot be accessed, the component is given thesame value as the 'key' so that
    //the key can be accessed through the id


//What are special considerations for forms in React? Forms naturally keep an internal state and as such will work differently in React.
//What are controlled and uncontrolled components? Controlled components are components that contain elements that naturally have a state  
                                                    //(this state is updated on user input e.g. <input>, <textArea>, <select> ) but this 
                                                    //state is now solely controlled by React. 
                                                    //Uncontrolled components are components that conatin elements where React is not in full control of
                                                    //the states of those elements.
//What are the benefits and drawbacks of either?Pros: The iput value is always driven by React and react can keep track of any changes
                                                    // It's value can be 'passed' to other elements and reset fro other event handlers
                                                    // Con: A bit more code typing is required i.e. an event handler.
//What is React recommendation on composition, inheritance and specialization? 1. There isn't any real need for use of inheritance as component composition is flexible enough 
                                                    //to achieve the desired result

//Discuss minimal representation of state - This is the smallest presentattion and identifying the element taht have states i.e. if an array is created, 
                                            // the count which is bound to change should not be stored in a separate variable, instaed the length property of the array should be used if the count has to be computed
//Where the state is suggested to live - The closest parent component is suggested to have the state so it can keep track of any changes
                                            // and be in sync with the elements that mutates
//inverse data flow - Since the state of the child component is controlled by the parent component, a call-back is necessary from the child component to the parent 
                                            //component so the state is updated and React updates the app.

