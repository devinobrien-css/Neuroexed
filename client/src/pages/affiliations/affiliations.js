import React from 'react';

/* STYLESHEET IMPORTS */
import './affiliations.css'; //contains styles specific to the user page
import '../../components/content_sections.css'; //contains general container styles

/* COMPONENT AND ELEMENT IMPORTS */
import Footer from '../../footer';
import Modal from '../../components/modals/modal';


/** Header for the landing page
 * 
 * @returns 
 */
const AffiliationsHeader = () => {
    return (
        <div className='affiliations-header'>
            <div>
                <p>The Affiliates of CNEE</p>
            </div>
            <div>
                <p>CNEE and its members work with a variety of entities to better understand and apply experiential education thinking to higher education and to the work-places and graduate/professional schools they serve.</p>
            </div>
        </div>
    );
}


const AffiliationsSpaceRow = (args) => {
    return (
        <div className={'space-row '+args.spec}>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

const fetchAffiliationsData = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/affiliations-data")
        .then((res) => res.json())
        .then((data) => setData(data.content));
    }, []);   
    return(!data ? "LOAD" : data);
}

const Affiliation = (args) => {
    var data = args.data;

    var modal_content = (
        <>
            <div className='section-header'>
                <p>You're about to leave our site!</p>
            </div>
            <div className='leaving-page'>
                <button onClick={() => location.href=data['affiliation_source']}>Click to continue</button>
            </div>
        </>
    )

    return (
        <div key={'affiliation'+args.affiliation_key} className='affiliation content-column'> 
            <div>
                <img src={'./affiliations_logos/'+data['affiliation_title']+'.png'} />
            </div> 
            <div>
                <p>{data['affiliation_name']}</p>
            </div>
            <div>
                <button onClick={() => Modal(modal_content)}>VISIT SITE</button>
            </div>
        </div>
    )
}

const AffiliationsList = (args) => {
    var data = args.data;

    var output = [];

    for(var i = 0; i < data.length; i++){
        output.push(<Affiliation affiliation_key={i} data={data[i]}/>);
    }

    return output;
}



/** Quote for the landing page
 * 
 * @returns 
 */
 const AffiliationsSection = () => {
    var affiliates = fetchAffiliationsData();

    if(affiliates === "LOAD"){
        return (
            <div className='load'>
                Loading
            </div>
        );
    }
    else {
        affiliates = JSON.parse(affiliates);

        return (
            <div className='affiliations-container'>
                <p>Affiliations</p>
                <div className='column-container'>
                    <AffiliationsList data={affiliates} />
                </div>
            </div>
        );
    }
}










/**
 * 
 * @param {*} args 
 * @returns 
 */
const Affiliations = (args) => {
    return (
		<div className='container'>
			<AffiliationsHeader />
            <AffiliationsSection />
            <Footer />
		</div>
    );
}

export default Affiliations;