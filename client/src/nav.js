import ReactDOM from 'react-dom';
import React from 'react';
import './nav.css';

const Nav = (user_data) => {
    return <div className='nav'>
        <button className='current'>Home</button>
        <button>People</button>
        <button>Projects</button>
        <button>Skills</button>
    </div>;
}

export default Nav;
