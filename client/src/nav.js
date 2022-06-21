import ReactDOM from 'react-dom';
import React from 'react';
import './nav.css';

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

const Nav = (args) => {
    return (
        <div className='nav'>
            <Buttons page={args.current} functions={args.functions} />
        </div>
    );
}

export default Nav;
