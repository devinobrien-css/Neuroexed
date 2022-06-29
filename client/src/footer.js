import React from 'react';
import './footer.css'; //contains styles specific to the footer 



const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <p>CONTACT</p>
                <div>
                    <button>Send us an email</button>
                    <button>Email a staff member</button>
                    <button>Report a bug</button>
                </div>
            </div>
            <div>
                <p>OUTREACH</p>
                <div>
                    <button>The Other Lobe Blog</button>
                    <button>Our Lab's Publications</button>
                    <button>Simplecast Podcast</button>
                </div>
            </div>
            <div>
                <p>AFFILIATES</p>
                <div>
                    <button>World Association of Cooperative Education</button>
                    <button>Center for Sympathetic Intelligence</button>
                    <button>IQ4 Transforming the Learning Economy</button>
                </div>
            </div>
        </div>
    )
}


export default Footer;