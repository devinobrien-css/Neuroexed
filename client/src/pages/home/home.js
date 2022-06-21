import ReactDOM from 'react-dom';
import React from 'react';
import './home.css';

const Home = (user_data) => {
    return (
        <div className='user-home'>
            <div className='user-header'>
                <img src='' alt='Profile Picture' />
                <p>First Lastname</p>
                <p>title/position</p>
                
            </div>
        </div>
    )
}

export default Home;
