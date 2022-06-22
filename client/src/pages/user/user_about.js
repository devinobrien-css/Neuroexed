/* Connect-Lite : About Section for User Page
 *********************************************
 * Holds components specific to the about 
 * section of the user page
 */
import React from 'react';

/* STYLESHEET IMPORTS */
import '../../components/content_sections.css'; //contains column and row container styles
import './user.css'; //contains styles specific to the user page
import './user_about.css'; //contains styles specific to the user-about section

/* COMPONENT AND ELEMENT IMPORTS */
import Warning from '../../components/warnings/warnings'; //contains warning sections and modals


/** Builds a users showcase row out of their specified top 5 skills (if specified)
 * 
 * @param {*} args : skills - list of up to five skills to showcase
 * @returns A showcase row based off of a users specified top 5 skills
 */
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

/** Constructs and returns the bio of the about section on the user page 
 * 
 * @param {*} args 
 * @returns 
 */
const ProfileBio = (args) => {
    var bio = <></>;

    if(args.bio != null){
        bio = (
            <div className='section-content'>
                <p>{args.bio}</p>
            </div> 
        );
    }
    else {
        bio = <Warning header={'Action Requested'} message={'You have not filled out your biography.'}/>;
    }

    return (
        <>
            <div className='section-header'>
                <p>ABOUT</p>
                <button>edit</button>
            </div>
            {bio}
        </>
    );
}


/** Generates and returns the user page about section
 * 
 * @param {*} args {
 *      data : object holding user data (bio, top five skills, linked accounts, projects, timeline data)
 * }
 * @returns the about section of a user page
 */
const ProfileAboutSection = (args) => {
	return (
		<div className='content column-container'>
            <div className='content-column-sm'>
                <div className='content-section'>
                    <ProfileBio/>
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

            <div className='content-column-lg'>
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