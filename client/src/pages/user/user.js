import ReactDOM from 'react-dom';
import React from 'react';

/* STYLESHEET IMPORTS */
import '../../components/content_sections.css'; //contains column and row container styles
import './user.css'; //contains styles specific to the user page

/* COMPONENT AND ELEMENT IMPORTS */
import Warning from '../../components/warnings/warnings'; //contains warning sections and modals
import ProfileAboutSection from './user_about';
import ProfileSkillsSection from './user_skills';
import ProfileExperienceSection from './user_experience';



/** Generates and returns the specified user page content section
 * 
 * @param {*} args {
 * 		section : specifies the type of section to generate
 * 	}
 * @returns a constructed container specific to section
 */
const ProfileContentSection = (args) => {
	if(args.section === "ABOUT"){
		return (
			<ProfileAboutSection />
		)
	}
	else if(args.section === "SKILLS"){
		return (
			<ProfileSkillsSection />
		)
	}
	else if(args.section === "EXPERIENCE"){
		return (
			<div className='profile-content'>
				<ProfileExperienceSection />
			</div>
		)
	}
	else {
		return <p>unknown specification</p>
	}
}

/** Constructs menu section with buttons referencing in-class toggle function
 * 
 * @param {*} args {
 * 		page : specifies the current tab selected
 * 		functions : list of pointers referencing in-class toggle function
 * }
 * @returns a menu of buttons that toggle the user profile content
 */
const Buttons = (args) => {
    const buttons = ['ABOUT','SKILLS','EXPERIENCE'];
    const output = [];
    buttons.forEach((button) => {
        if(button === args.page){
            output.push(<button className='selected' onClick={args.functions[button]}>{button}</button>);
        }
        else {
            output.push(<button onClick={args.functions[button]}>{button}</button>);
        }
    })
    return output;
}

/** Builds and returns a menu for switching between the user profile content sections 
 * 
 * @param {*} args {
 * 		page : specifies the current tab selected
 * 		functions : list of pointers referencing in-class toggle function
 * }
 * @returns a menu of buttons for switching the profile content
 */
const ProfileDataToggle = (args) => {
	return (
		<>
			<div className='profile-toggle-menu'>
				<div>
					<Buttons page={args.page} functions={args.functions}/ >
				</div>
			</div>
		</>
	);
}

/** Builds and returns the menu and content section of a user profile
 * 
 * @returns 
 */
const ProfileContent = (args) => {
	return (
		<>
			<ProfileDataToggle  page={args.page} functions={args.functions} />
			<ProfileContentSection section={args.page} />
		</>
	);
}

/**Renders and returns the header of a user profile
 * 
 * @param {*} args 
 * @returns 
 */
const ProfileHeader = (args) => {
	return (
		<div className='profile-header'>
			<div>
				<img src='http://placehold.jp/200x200.png' width={200} height={200} alt='profile pic' />
			</div>
			<div>
				<p>{args.first} {args.last}</p>
				<p>{args.title}</p>
			</div>
		</div> 
	);
}


/**
 * 
 * @param {*} args 
 * @returns 
 */
const UserProfile = (args) => {

	const [currentState, setState] = React.useState("");//initialize state variable
    if(currentState === "")//set initial state if empty
		setState("ABOUT");

	/** Toggles the state of content to render based off of tab selected
	 * 
	 * @param {*} state 
	 */
    const handleToggle = (state) => {
        setState(state);
    };
	const stateFunctions = {'ABOUT': ()=>handleToggle('ABOUT'), 'SKILLS': ()=>handleToggle('SKILLS'), 'EXPERIENCE' : ()=>handleToggle('EXPERIENCE')};

    return (
		<>
			<ProfileHeader first={args.first} last ={args.last}  title={args.title}/>
			<ProfileContent page={currentState} functions={stateFunctions}/>
		</>
    );
}

export default UserProfile;