import React, { Component } from 'react';

class React_Main_Concepts extends Component {

    formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    }
    // user = {
    //     firstName: 'Harper',
    //     lastName: 'Perez'
    // }
    introJSX() {
        // const name = 'Josh Perez';
        // const element = <h2>Hello, {name}!</h2>;
        if (this.user) {
            return <h1>Hello, {this.formatName(this.user)}!</h1>;
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

export default React_Main_Concepts;

//=====JSX=====
//What is JSX - This is an extension of javaScript syntax e.g. 'element' in introJSX()
// Why was JSX created - To provide another option to 'separating technologies' by 'separating concerns' instead of separating the logic and markup in taditional js
// Benefits - It can help in visual aid of the UI; 
//          - helps in XSS -'cross-site' scripting attacks;
//          - hekps write bug-free code
// Drawbacks - It can be confusing with traditional js as markup and logic are mixed;

//=====RENDERING=====
//What is rendering - 
//How does React update only what’s needed -