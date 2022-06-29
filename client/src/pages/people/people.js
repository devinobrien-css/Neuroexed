import React from 'react';

/* STYLESHEET IMPORTS */
import './people.css'; //contains styles specific to the user page
import '../landing/landing.css'; //contains styles specific to the user page
import '../../components/content_sections.css'; //contains general container styles

/* COMPONENT AND ELEMENT IMPORTS */
import Footer from '../../footer';

/** Header for the landing page
 * 
 * @returns 
 */
const PeopleHeader = () => {
    return (
        <div className='people-header'>
            <div>
                <p>The Stellar Research Lab, an interdisciplinary team of neuroscience enthusiasts</p>
            </div>
            <div>
                <p>With distinguished, oftentimes non-neuroscientist backgrounds, the lab approaches topics from nontraditional points of view to compose unique content for the fellow curious mind.</p>
            </div>
        </div>
    );
}


const StellarSection = () => {
    return (
        <div className='people-container'>
            <p>Our Lab Director, James Stellar</p>
            <div className='profile'>
                <div>
                    <div>
                        <img src='./people/stellar.png' alt='profile photo' />
                    </div>
                    <div>
                        <p>Dr. James Stellar</p>
                        <p>Lab Director</p>
                        <p>Member since 2015</p>
                    </div>
                </div>
                <div>
                    <p>Stellar's career began as a basic neuroscientist, trained at the University of Pennsylvania as a PhD and postdoctoral fellow, and then appointed as an assistant and associate (untenured professor) at the Department of Psychology at Harvard University. In 1985 he wrote a book, The Neurobiology of Motivation and Reward, with his father, Eliot Stellar, also a neuroscience professor who had then returned to the faculty after serving as Provost at the University of Pennsylvania.</p>
                </div>
            </div>
        </div>
    )
}



const Profile = (args) => {
    var data = args.data;

    return (
        <div className='profile content-column'>
            <div>
                <div>
                    <img src={'./people/'+data["last_name"].replace("'","")+'.png'} alt='profile photo' />
                </div>
                <div>
                    <p>{data['first_name']} {data['last_name']}</p>
                    <p>{data['lab_title']}</p>
                    <p>Member since {data['year_joined']}</p>
                </div>
            </div>
            <div>
                <p>{data['member_description']}</p>
            </div>
        </div>
    )
}


const ProfileList = (args) => {
    var data = args.data;

    var output = [];

    for(var i = 0; i < data.length; i++){
        output.push(<Profile data={data[i]}/>);
    }

    return output;
}



const fetchPeopleData = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/people-data")
        .then((res) => res.json())
        .then((data) => setData(data.content));
    }, []);   
    return(!data ? "LOAD" : data);
}
/** Quote for the landing page
 * 
 * @returns 
 */
 const PeopleSection = () => {
    var projects = fetchPeopleData();

    if(projects === "LOAD"){
        return (
            <div className='load'>
                Loading
            </div>
        );
    }
    else {
        projects = JSON.parse(projects);

        return (
            <div className='people-container '>
                <div className='column-container'>
                    <ProfileList data={projects} />
                </div>
            </div>
        );
    }
}


const PageSpaceRow = (args) => {
    return (
        <div className={'space-row '+args.spec}>
            <br/>
            <br/>
            <br/>
        </div>
    )
}


/**
 * 
 * @param {*} args 
 * @returns 
 */
const People = (args) => {
    return (
		<div className='container'>
			<PeopleHeader />
            <StellarSection />
            <PageSpaceRow />
            <PeopleSection />
            <Footer />
		</div>
    );
}

export default People;