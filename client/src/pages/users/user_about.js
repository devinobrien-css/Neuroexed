import React from 'react';
import './user_about.css';
import './user.css';
import Warning from '../../warnings'


const ShowcaseRow = (args) => {
	//add conditional (if len(showcased) == 0)

	return (
		<div className='showcase-row'>
			<div>
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

const ProfileAboutSection = (args) => {
	return (
		<div className='profile-content'>
            <div className='profile-content-column-sm'>
                <div className='content-section'>
                    <div className='section-header'>
                        <p>ABOUT</p>
                        <button>edit</button>
                    </div>
                    <div>
                        {/* ADD FUNCTIONALITY TO CHECK IF DATA EXISTS OR IF WARNING NEEDED */}
                        <Warning header={'Action Requested'} message={'You have not filled out your biography.'}/>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <div className='section-header'>
                        <p>SHOWCASE</p>
                    </div>
                    <div>
                        {/* ADD FUNCTIONALITY TO CHECK IF DATA EXISTS OR IF WARNING NEEDED */}
                        <Warning header={'Action Requested'} message={'You have not chosen any items to showcase. Select up to 5 of your skills or certifications that you want to showcase on your profile for others to see.'}/>
                        <ShowcaseRow/>
                    </div>
                </div>
                <div className='content-section'>
                    <div className='section-header'>
                        <p>LINKED ACCOUNTS</p>
                    </div>
                </div>
            </div>
            <div className='profile-content-column-lg'>
                <div className='content-section'>
                    <div className='section-header'>
                        <p>CURRENT PROJECTS</p>
                    </div>
                    <div className='section-content'>
                        <p>User not currently allocated to any projects</p>
                    </div>
                    <div className='section-header'>
                        <p>TIMELINE</p>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default ProfileAboutSection;