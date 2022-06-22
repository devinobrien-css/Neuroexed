import ReactDOM from 'react-dom';
import React from 'react';
import './user.css';
import Warning from '../../warnings';

import ProfileAboutSection from './user_about';
import ProfileSkillsSection from './user_skills';


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
				experience
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