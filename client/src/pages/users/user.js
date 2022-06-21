import ReactDOM from 'react-dom';
import React from 'react';
import './user.css';


const UserProfile = (args) => {
    return (
        <div className='profile-header'>
            {args.first} {args.last} <br/>
            -- {args.email}
            
        </div> 
    )
}

export default UserProfile;