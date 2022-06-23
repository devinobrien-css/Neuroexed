import ReactDOM from 'react-dom';
import React from 'react';

/* STYLESHEET IMPORTS */
import './warnings.css';

/* COMPONENT AND ELEMENT IMPORTS */


/** Builds and returns a standard warning section 
 * 
 * @param {*} args {
 * 		header : title of warning
 * 		message : content of warning
 * }
 * @returns a tandard warning section
 */
const Warning = (args) => {
    return (
		<>
			<div className='warning'>
				<div>
					<p>!</p>
				</div>
				<div>
                    <div>
                        <p>{args.header}</p>
					    <p>{args.message}</p>
                    </div>
				</div>
			</div> 
		</>
    )
}

export default Warning;