import React from 'react';

/* STYLESHEET IMPORTS */
import '../../components/content_sections.css'; //contains column and row container styles

/* COMPONENT AND ELEMENT IMPORTS */
import Warning from '../../components/warnings/warnings'; //contains warning sections and modals
import './user.css'; //contains styles specific to the user page


/** Builds and returns all inner sections of a user profile experience section
 * 
 * @param {*} args {
 * 
 * }
 * @returns 
 */
const ProfileExperienceSection = (args) => {
    return (
        <div className='content column-container'>
            <div className='content-column-sm'>
                <div className='content '>
                    <div className='content-section-header content-row'>
                        <p><svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg> EDUCATION</p>
                    </div>
                    <div className='borderless-content-section content-row'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className='content '>
                    <div className='content-section-header content-row'>
                        <p> PREVIOUS WORK</p>
                    </div>
                    <div className='borderless-content-section content-row'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            <div className='content-column-lg'>
                <div className='content '>
                    <div className='content-section-header content-row'>
                        <p> <svg viewBox="64 64 896 896" focusable="false" data-icon="reconciliation" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"></path></svg> JG PROJECTS</p>    
                    </div>
                    <div className='borderless-content-section content-row'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileExperienceSection;