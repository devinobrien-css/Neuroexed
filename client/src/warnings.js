import ReactDOM from 'react-dom';
import React from 'react';
import './warnings.css';



const Warning = (args) => {
    return (
		<>
			<div className='warning'>
				<div>
					<p>!</p>
				</div>
				<div>
                    <div>
                        <p>Action Item Required</p>
					    <p>{args.message}</p>
                    </div>
				</div>
			</div> 
		</>
    )
}

export default Warning;