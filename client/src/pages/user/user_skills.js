import React from 'react';
import ReactDOM from "react-dom";
import { ArcElement, Chart} from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { chartColors } from "./chart_colors";

/* STYLESHEET IMPORTS */
import '../../components/content_sections.css'; //contains column and row container styles
import './user.css'; //contains styles specific to the user page
import './user_skills.css'; //contains styles specific to the user skills section

/* COMPONENT AND ELEMENT IMPORTS */
import Warning from '../../components/warnings/warnings'; //contains warning sections and modals
import SkillsChart from './user_skills_chart';



/** Adds a skill connection to a user
 * 
 */
const AddSkillButton = (agrs) => {
    return (
        <div className='add-skill-button'>
            
        </div>
    )
}


/** Builds and returns a summary list of skills including skill img and title
 * 
 * @param {*} args 
 */
const SkillsSummaryList = (args) => {
    return (
        <div className='summary-list-container'>
            <AddSkillButton />
        </div>
    )
}




/** Builds and returns the skills summary subsection
 * 
 * @param {*} args {
 * 
 * }
 * @returns the skills sumary subsection of the user page
 */
const SkillsSummary = (args) =>{

        return (
            <div className='content '>
                <div className='content-section-header content-row'>
                    <p><svg viewBox="64 64 896 896" focusable="false" data-icon="code" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg> SKILLS SUMMARY</p>
                </div>
                <div className='borderless-content-section content-row'>
                    <div className='content column-container'>
                        <div className='content-column'>
                            <div className='content'>
                                <div className='skills-summary-section'>
                                    <div className='section-header '>
                                        <p>Knowledgable skills:</p>
                                    </div>
                                    <div className='section-content '>
                                        <SkillsSummaryList type={'Knowledgable'} />
                                    </div>
                                    <div className='section-header '>
                                        <p>Proficient skills:</p>
                                    </div>
                                    <div className='section-content '>
                                        <p>No skills specified</p>
                                    </div>
                                    <div className='section-header '>
                                        <p>Lead/Teachable skills:</p>
                                    </div>
                                    <div className='section-content '>
                                        <p>No skills specified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='vertical-divider'/>
                        <div className='content-column'>
                            <div className='content'>
                                <SkillsChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

/** Builds and returns the skills section of the user page
 * 
 * @param {*} args {
 * 
 * }
 * @returns the skills section of the user page
 */
const ProfileSkillsSection = (args) => {
	return (
        <>
            <SkillsSummary />
            
            <div className='content column-container'>
                <div className='content-column-lg'>
                    <div className='content '>
                        <div className='content-section-header content-row'>
                            <p><svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg> SKILLS SEARCH</p>
                        </div>
                        <div className='borderless-content-section content-row'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className='content-column-sm'>
                    <div className='content '>
                        <div className='content-section-header content-row'>
                            <p> <svg viewBox="64 64 896 896" focusable="false" data-icon="reconciliation" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"></path></svg> CERTIFICATIONS</p>    
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
                            <p><svg viewBox="64 64 896 896" focusable="false" data-icon="reconciliation" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"></path></svg> SKILLS ASSESMENTS</p>
                        </div>
                        <div className='borderless-content-section content-row'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='content-section-header content-row'>
                            <p><svg viewBox="64 64 896 896" focusable="false" data-icon="reconciliation" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"></path></svg> SKILLS ASSESMENTS</p>
                        </div>
                        <div className='borderless-content-section content-row'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='content-section-header content-row'>
                        <p><svg viewBox="64 64 896 896" focusable="false" data-icon="bulb" width="1em" height="0.8em" fill="currentColor" aria-hidden="true"><path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"></path></svg> DID YOU KNOW?</p>
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
        </>

	);
}

export default ProfileSkillsSection;