import ReactDOM from 'react-dom';
import React from 'react';
import Login from './login.js';
import Users from './Profiles/User/user.js';
import './index.css';

const App = () => {
    return Users();
}

ReactDOM.render(<App />, document.getElementById('app'));