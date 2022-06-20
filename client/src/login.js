import ReactDOM from 'react-dom';
import React from 'react';
import './login.css';

const Login = () => {
    return <div className='modal-bg'>
        <div className='login-modal'>
            <p>LOGIN TO CONNECT</p>
            <p>Use your JG Gmail account to login</p>
            <button>Sign in with Google</button>
        </div>
    </div>;
}

export default Login;
