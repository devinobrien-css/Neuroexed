import ReactDOM from 'react-dom';
import React from 'react';

/* STYLESHEET IMPORTS */
import './nav.css';

/* COMPONENT AND ELEMENT IMPORTS */


/** Builds and returns a menu bar with buttons referencing toggle function
 * 
 * @param {*} args {
 *      page : specifies the current tab selected
 * 		functions : list of pointers referencing in-class toggle function
 * }
 * @returns a navigation bar with buttons referencing in-class toggle function
 */
const Buttons = (args) => {
    const buttons = ['USER','PEOPLE','PROJECTS','SKILLS'];
    const output = [];
    buttons.forEach((button) => {
        if(button === args.page){
            output.push(<button className='current' onClick={args.functions[button]}>{button}</button>);
        }
        else {
            output.push(<button onClick={args.functions[button]}>{button}</button>);
        }
    })
    return output;
}

/** Constructs and returns the website navigation bar
 * 
 * @param {*} args {
 *      current : current page selected
 *      functions : list of functions referencing toggle function
 * }
 * @returns 
 */
const Nav = (args) => {
    return (
        <div className='nav'>
            <Buttons page={args.current} functions={args.functions} />
        </div>
    );
}

export default Nav;
