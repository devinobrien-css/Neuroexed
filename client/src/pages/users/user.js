import ReactDOM from 'react-dom';
import React from 'react';
import './user.css';


const UserProfile = (args) => {
    return (
        <div className='profile-header'>
			<div>
				<img src='http://placehold.jp/200x200.png' alt='profile pic' />
			</div>
			<div>
				<p>{args.first} {args.last}</p>
				<p>{args.title}</p>
			</div>
        </div> 
    )
}

export default UserProfile;