import ReactDOM from 'react-dom';
import React from 'react';
import './header.css';

const Header = (user_data) => {
    return <div className='header'>
        <div>
            <p>CONNECT Lite</p>
        </div>
        <div>
            <img src='http://placehold.jp/50x50.png' alt='profile pic' />
        </div>
    </div>;
}

export default Header;
