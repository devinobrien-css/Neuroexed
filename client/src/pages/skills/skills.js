
import ReactDOM from 'react-dom/client';
import React from 'react';

/* STYLESHEET IMPORTS */
import '../../components/content_sections.css'; //contains column and row container styles
import './skills.css'; //contains styles specific to the user page

/* COMPONENT AND ELEMENT IMPORTS */
import Warning from '../../components/warnings/warnings'; //contains warning sections and modals
import Modal from '../../components/modals/modal';








const ListRow = (args) =>{
    return (
        <div className='list-row'>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    )
}


const ListRows = () => {
    const output = [];
    for(var i = 0; i < 10; i+=1){
        output.push(<ListRow />);
    }
    return output;
}

const ListHeader = () => {
    return (
        <div className='list-header list-row'>
            <div>
                <p>Logo</p>
            </div>
            <div>
                <p>Name</p>
            </div>
            <div>
                <p>Description</p>
            </div>
            <div>
                <p>Category</p>
            </div>
            <div>
                <p>Number of Users with Skill</p>
            </div>
            <div>
                <p>Date Added</p>
            </div>
            <div>
                <p>Skills Page</p>
            </div>
        </div>
    )
}

/** Generates and returns a list of all skills
 * @returns a constructed container specific to section
 */
const SkillsList = (args) => {
	return (
        <div className='skills-list'>
            <ListHeader />
            <ListRows />
        </div>
    )
}

const modal_root = ReactDOM.createRoot(document.getElementById('modal'));

function removeModal(){
    const modal = document.querySelector('.modal')
    modal.animate([{transform:'scale(1)'}, {transform: 'scale(0)'}], {duration: 300});
    setTimeout(() => {  modal_root.render(<></>); }, 280);
    
}


function toggle_active(id){
    var button = document.getElementById(id)

    if(button.classList.contains('selected')){
        button.classList.remove('selected')
    }
    else{
        button.classList.add('selected')
    }
}

const AddSkillModal = () => {
    console.log('init')
    const modal_content = (
        <div>
            <div className='section-header'>
                <p>Add a new skill</p>
            </div>
            <div className='skill-form-container'>
                <form onSubmit={() => {}}>
                    <div className='skill-form-input'>
                        <p>Skill Name</p>
                        <input></input>
                    </div>
                    <br/>
                    <div  className='skill-form-input'>
                        <p>Description</p>
                        <textarea></textarea>
                    </div>
                    <br/>
                    <div  className='skill-form-input'>
                        <p>Select Categories Relevent to Skill</p>
                        <div className='skill-category-list'>
                            <button type='button' id='b1' onClick={() => toggle_active('b1')}>category 1</button>
                            <button type='button' id='b2' onClick={() => toggle_active('b2')}>category 2</button>
                            <button type='button' id='b3' onClick={() => toggle_active('b3')}>category 3</button>
                            <button type='button' id='b4' onClick={() => toggle_active('b4')}>category 4</button>
                            <button type='button' id='b5' onClick={() => toggle_active('b5')}>category 5</button>
                            <button type='button' id='b6' onClick={() => toggle_active('b6')}>category 6</button>
                            <button type='button' id='b7' onClick={() => toggle_active('b7')}>category 7</button>
                            <button type='button' id='b8' onClick={() => toggle_active('b8')}>category 8</button>
                            <button type='button' id='b9' onClick={() => toggle_active('b9')}>category 9</button>
                        </div>
                    </div>
                    <br/>
                    <div className='skill-form-submit'>
                        <button>ADD SKILL</button>
                    </div>
                </form>
            </div>
        </div>
    )

    return (
        <Modal content={modal_content} remove_function={() => removeModal()} />
    )
}

const AddSkillButton = () => {
    console.log(document.querySelector('#modal'))
    return (
        <div>
            <button onClick={() => {modal_root.render(<AddSkillModal />);}}>ADD SKILL</button>
        </div>
    )
}

/** Builds and returns a menu for switching between the user profile content sections 
 * 
 * @param {*} args {
 * 		page : specifies the current tab selected
 * 		functions : list of pointers referencing in-class toggle function
 * }
 * @returns a menu of buttons for switching the profile content
 */
const ListAggregationBar = (args) => {

    var admin_utils = []

    // TODO: perform admin check here
    if(true) {
        admin_utils.push(<AddSkillButton />);
    }


	return (
        <div className='skills-aggregation-bar'>
            <div>
                <input placeholder='search skills'></input><div><svg viewBox="64 64 896 896" focusable="true" data-icon="search" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></div>
            </div>
            {admin_utils}
        </div>
	);
}

/** Builds and returns the menu and content section of a user profile
 * @returns a list and menu bar to aggregate list items
 */
const SkillsContainer = (args) => {
	return (
		<div className='skills-container'>
			<ListAggregationBar />
			<SkillsList />
		</div>
    )
}

/**Returns the header of the skills page
 * @returns the header of the skills page
 */
const SkillsHeader = () => {
	return (
		<div className='skills-header'>
			<div className='section-header'>
				<p>SKILLS DIRECTORY</p>
			</div>
		</div> 
	);
}


/** Builds and returns the skills page
 * @returns the header and skills list for the skills page
 */
const SkillsPage = (args) => {
    return (
		<div className='container'>
			<SkillsHeader />
			<SkillsContainer />
		</div>
    );
}

export default SkillsPage;