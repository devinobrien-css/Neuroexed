import ReactDOM from 'react-dom';
import React from 'react';
import './user.css';
import Warning from '../../warnings';

const ProfileContentSection = (args) => {
	if(args.section === "ABOUT"){
		return (
			<div className='profile-content'>
				<div className='profile-content-column-sm'>
					<div className='column-section'>
						<div className='column-section-header'>
							<p>ABOUT</p>
							<button>edit</button>
						</div>
						<div>
							<Warning message={'You have not filled out your biography.'}/>
						</div>
					</div>
					<div className='column-section'>
						Skill 2
					</div>
				</div>
				<div className='profile-content-column-lg'>
					<div className='column-section'>
						Skill 1
					</div>
				</div>
			</div>
		)
	}
	else if(args.section === "SKILLS"){
		return (
			<div className='profile-content'>
				skills
			</div>
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