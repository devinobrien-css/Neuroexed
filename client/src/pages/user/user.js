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

const ProfileDataToggle = (args) => {
	return (
		<>
			<div className='profile-toggle-menu'>
				<div>
					<Buttons page={args.page} functions={args.functions}/ >
				</div>
			</div>
			<ProfileContentSection section={args.page} />
		</>
	);
}


const UserProfile = (args) => {
	const [currentState, setState] = React.useState("");

    if(currentState === "")
        setState("ABOUT");

    const handleToggle = (state) => {
        setState(state);
    };
	const stateFunctions = {'ABOUT': ()=>handleToggle('ABOUT'), 'SKILLS': ()=>handleToggle('SKILLS'), 'EXPERIENCE' : ()=>handleToggle('EXPERIENCE')};

    return (
		<>
			<div className='profile-header'>
				<div>
					<img src='http://placehold.jp/200x200.png' width={200} height={200} alt='profile pic' />
				</div>
				<div>
					<p>{args.first} {args.last}</p>
					<p>{args.title}</p>
				</div>
			</div> 
			<ProfileDataToggle page={currentState} functions={stateFunctions}/>
		</>
    )
}

export default UserProfile;