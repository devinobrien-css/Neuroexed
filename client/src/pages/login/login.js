import React from 'react';

/* STYLESHEET IMPORTS */
import './login.css';

/** Builds and returns the website login page
 * @returns a login modal
 */
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
