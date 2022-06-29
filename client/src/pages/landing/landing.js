import React from 'react';

/* STYLESHEET IMPORTS */
import './landing.css'; //contains styles specific to the user page
import '../../components/content_sections.css'; //contains general container styles

/* COMPONENT AND ELEMENT IMPORTS */
import Footer from '../../footer';


/** Header for the landing page
 * 
 * @returns 
 */
const LandingHeader = () => {
    return (
        <div className='landing-header'>
            <div>
                <p>Center for Neuroscience and Experiential Education</p>
            </div>
            <div>
                <p>An interactive semi-virtual laboratory for study, writing, and research</p>
            </div>
        </div>
    );
}



/** Quote for the landing page
 * 
 * @returns 
 */
 const LandingQuote = () => {
    return (
        <div className='landing-quote'>
            <div>
                <p>“The heart has reasons of which reason does not know.”</p>
            </div>
            <div>
                <p>- Blaise Pascale, 1623-62, mathematician, physicist, philosopher</p>
            </div>
        </div>


    );
}




/** Quote for the landing page
 * 
 * @returns 
 */
 const LandingBrain = () => {
    return (
        <div className='column-container brain-container'>
            <div className='content-column'>
                <div className='landing-brain'>
                    
                </div>
            </div>
            <div className='content-column'>
                <div className='landing-brain-detail'>
                    <p>The Stellar Research Lab is made up of an interdisciplinary team of neuroscience enthusiasts. A common interest in the importance of experiential learning and the brain basis of decision making unites us to explore this challenging yet exciting area. Because of our unique, oftentimes non-neuroscientist backgrounds, the lab is able to approach topics from nontraditional point of view to compose unique assortments of blogs, papers, podcasts and books for the fellow curious mind...</p>
                </div>
            </div>
        </div>
    );
}





const fetchBlogData = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/blog-data")
        .then((res) => res.json())
        .then((data) => setData(data.content));
    }, []);   
    return(!data ? "LOAD" : data);
}




const Blog = (args) => {
    var data = args.data;

    var image = <></>;
    var button_title = <></>;

    if(data['media_type'] === "BLOG"){
        button_title = "READ ARTICLE";
        image = <svg width="80" height="80" enableBackground="new 0 0 128 128" id="Layer_1" version="1.1" viewBox="0 0 128 128" ><circle cx="64" cy="64" fill="#4B5F83" id="circle" r="64"/><g id="icon"><path d="M95,96H33c-2.2,0-4-1.8-4-4V37c0-2.2,1.8-4,4-4h62c2.2,0,4,1.8,4,4v55C99,94.2,97.2,96,95,96z" fill="#FFFFFF" id="bg"/><g id="text"><rect fill="#E6E6E6" height="4" id="XMLID_2_" width="33" x="56" y="57"/><rect fill="#E6E6E6" height="4" id="XMLID_7_" width="33" x="56" y="65"/><rect fill="#E6E6E6" height="4" id="XMLID_8_" width="50" x="39" y="73"/><rect fill="#E6E6E6" height="4" id="XMLID_9_" width="50" x="39" y="81"/></g><rect fill="#22A7F0" height="12" id="img" width="12" x="39" y="57"/><path d="M95,33H33c-2.2,0-4,1.8-4,4v4.1V42v4h70v-4v-0.9V37C99,34.8,97.2,33,95,33z" fill="#E6E6E6" id="header"/><circle cx="36" cy="39.8" fill="#CF000F" id="red" r="2"/><circle cx="42" cy="39.8" fill="#E67E22" id="orange" r="2"/><circle cx="48" cy="39.8" fill="#26A65B" id="green" r="2"/></g></svg>;
    }
    else {
        button_title = "LISTEN";
        image = <svg width="80" height="80" viewBox="0 0 100 100"><path fill="#E37948" d="M50 0c27.614 0 50 22.386 50 50s-22.386 50-50 50-50-22.386-50-50 22.386-50 50-50z"/><g fill="#CC6D41"><path d="M70 33c-6.627 0-12 5.148-12 11.5 0 5.006 3.343 9.251 8 10.832v24.668c0 .504.385.959 1 1.311v6.689c0 .553.447 1 1 1v7.647c1.362-.526 2.698-1.104 4-1.743v-5.904c.553 0 1-.447 1-1v-6.689c.615-.352 1-.807 1-1.311v-24.668c4.658-1.581 8-5.826 8-10.832 0-6.352-5.372-11.5-12-11.5zM26 93.869v-15.869c.553 0 1-.447 1-1v-5.184c1.162-.413 2-1.512 2-2.816v-38c0-1.305-.838-2.402-2-2.816v-5.184c0-.552-.447-1-1-1v-15.869c-1.373.753-2.709 1.565-4 2.44v13.429c-.552 0-1 .448-1 1v5.184c-1.162.414-2 1.512-2 2.816v38c0 1.305.838 2.403 2 2.816v5.184c0 .553.448 1 1 1v13.43c1.291.874 2.627 1.686 4 2.439zM50 56.311c.615-.352 1-.807 1-1.311v-22.039c5.34-.261 8.842-2.593 10.613-5.975.775-.068 1.387-.814 1.387-1.736v-8.5c0-.902-.588-1.637-1.34-1.73-1.834-3.594-5.607-6.02-11.66-6.02-6.627 0-12 5.373-12 12 0 4.012 1.976 7.555 5 9.733v24.267c0 .504.385.959 1 1.311v6.689c0 .553.448 1 1 1v35.75c1.318.131 2.654.198 4 .225v-35.975c.553 0 1-.447 1-1v-6.689z"/></g><g fill="#E0E3E4"><path d="M23 92.073c1.294.832 2.628 1.606 4 2.318v-88.783c-1.372.712-2.706 1.486-4 2.319v84.146zM69 96.253c1.365-.562 2.698-1.186 4-1.861v-6.392h-4v8.253zM46 64v35.826c1.321.104 2.652.174 4 .174v-36h-4z"/></g><path fill="#C9CCCD" d="M23 92.073c.333.214.662.435 1 .642v-85.429c-.338.207-.667.427-1 .641v84.146z"/><path fill="#CCD0D2" d="M45 56h6v7c0 .553-.447 1-1 1h-4c-.553 0-1-.447-1-1v-7z"/><path fill="#B7BBBD" d="M46 63v-7h-1v7c0 .553.447 1 1 1h1c-.553 0-1-.447-1-1z"/><g fill="#B7BBBD"><path d="M23 77v-6h-1v6c0 .553.447 1 1 1h1c-.553 0-1-.447-1-1zM23 23c0-.553.447-1 1-1h-1c-.553 0-1 .447-1 1v6h1v-6z"/></g><path fill="#CCD0D2" d="M27 22h-4c-.553 0-1 .447-1 1v6h6v-6c0-.553-.447-1-1-1zm-5 55c0 .553.447 1 1 1h4c.553 0 1-.447 1-1v-6h-6v6z"/><path fill="#F4F4F7" d="M23 28h4c1.657 0 3 1.344 3 3v38c0 1.657-1.343 3-3 3h-4c-1.657 0-3-1.343-3-3v-38c0-1.656 1.343-3 3-3zM64 21c0-6.627-3.979-12-13-12-6.627 0-12 5.373-12 12 0 4.011 1.976 7.554 5 9.733v24.267c0 1.104 1.791 2 4 2s4-.896 4-2v-22.039c8.125-.398 12-5.593 12-11.961z"/><path fill="#EAEAED" d="M42 21c0-6.191 4.69-11.285 10.711-11.929-.55-.045-1.118-.071-1.711-.071-6.627 0-12 5.373-12 12 0 4.011 1.976 7.554 5 9.733v24.267c0 1.104 1.791 2 4 2 .531 0 1.036-.055 1.5-.148-1.465-.297-2.5-1.013-2.5-1.852v-22.698c1.253.444 2.595.698 4 .698.587 0 1.15-.027 1.695-.074-6.012-.65-10.695-5.74-10.695-11.926z"/><g fill="#7D7E80"><path d="M62.5 15c-.828 0-1.5.783-1.5 1.75v8.5c0 .967.672 1.75 1.5 1.75l.104-.012c.928-1.763 1.396-3.803 1.396-5.988 0-2.18-.44-4.219-1.34-5.981l-.16-.019zM51 20.5c0-.828-.672-1.5-1.5-1.5h-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h3c.828 0 1.5-.672 1.5-1.5z"/></g><path fill="#CCD0D2" d="M68 81h6v7c0 .553-.447 1-1 1h-4c-.553 0-1-.447-1-1v-7z"/><path fill="#B7BBBD" d="M69 88v-7h-1v7c0 .553.447 1 1 1h1c-.553 0-1-.447-1-1z"/><path fill="#F4F4F7" d="M71 33c6.627 0 12 5.148 12 11.5s-5.373 11.5-12 11.5-12-5.148-12-11.5 5.373-11.5 12-11.5z"/><path fill="#7D7E80" d="M71 38c.553 0 1 .447 1 1v2c0 .553-.447 1-1 1s-1-.447-1-1v-2c0-.553.447-1 1-1z"/><path fill="#F4F4F7" d="M77 49h-6l-6-1c2.103 2.104 2 7 2 7v25c0 1.104 1.791 2 4 2s4-.896 4-2v-25s-.103-3.896 2-6z"/><g fill="#E8E8EA"><path d="M67 55s.038-1.874-.43-3.802c-3.344-2.04-5.57-5.616-5.57-9.698 0-1.632.359-3.182.999-4.588-1.861 2.026-2.999 4.676-2.999 7.588 0 5.005 3.343 9.251 8 10.832v-.332zM75.212 52.789c-.237 1.237-.212 2.211-.212 2.211v.337c3.138-1.066 5.679-3.342 7.001-6.249-1.735 1.889-4.105 3.218-6.789 3.701z"/></g><path fill="#C9CCCD" d="M46 99.826l1 .076v-35.902h-1v35.826zM69 96.253c.336-.138.668-.28 1-.425v-7.828h-1v8.253z"/><path fill="#E8E8EA" d="M23 69v-38c0-1.656 1.343-3 3-3h-3c-1.657 0-3 1.344-3 3v38c0 1.657 1.343 3 3 3h3c-1.657 0-3-1.343-3-3z"/><path fill="#E9EAEE" d="M24 41h2c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2h-2c-1.104 0-2-.896-2-2v-16c0-1.104.896-2 2-2z"/><path fill="#D1D2D6" d="M26 41h-2c-1.104 0-2 .896-2 2v2c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v-2c0-1.104-.896-2-2-2z"/><path fill="#FDFDFD" d="M26 59h-2c-1.104 0-2-.896-2-2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0 1.104-.896 2-2 2z"/></svg>;
    }

    return (
        <div key={'blog'+args.blog_key} className='blog'>  
            <div>
                <div>
                    {image}
                </div>
                <div>
                    <p>{data['media_title']}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>{data['media_content']}</p>
                </div>
            </div>
            <div>
                <button>{button_title}</button>
            </div>
        </div>
    )
}

const BlogList = (args) => {
    var data = args.data;

    var output = [];

    for(var i = 0; i < data.length; i++){
        output.push(<Blog blog_key={i} data={data[i]}/>);
    }

    return output;
}



/** Quote for the landing page
 * 
 * @returns 
 */
 const LandingBlogs = () => {
    var blogs = fetchBlogData();

    if(blogs === "LOAD"){
        return (
            <div className='load'>
                Loading
            </div>
        );
    }
    else {
        blogs = JSON.parse(blogs);

        return (
            <div className='blog-container'>
                <p>Blogs and Podcasts</p>
                <BlogList data={blogs} />
            </div>
        );
    }
}





const LandingBooks = () =>{
    return (
        <div className='book-section'>
            <p>Recent Publications</p>
            <div className='book column-container'>
                <div className='content-column-sm'>
                    
                </div>
                <div className='content-column-lg'>
                    <p>Diversity at College</p>
                    <p>In 2020, eight lab members and recent college graduates produced a book, Diversity at College: Real Stories of Students Conquering Bias and Making Higher Education more Inclusive. The book is fully co-authored (not edited) and applies lessons from experiential education and social neuroscience thinking to five key student-centered stories, such as implicit bias or stereotype threat. The book was named as finalist for the 2021 Indie book awards in the social change category and serves as a basis for recent panel discussions.</p>
                    <button>PURCHASE HERE</button>
                </div>
            </div>

            <div className='book column-container'>
                <div className='content-column-sm'>
                    
                </div>
                <div className='content-column-lg'>
                    <p>Education that Works</p>
                    <p>Experiential Education complements the classical academic nature of the classroom-based college experience by bringing in direct experience with industry, non-profits, and governments. In 2017, Stellar wrote a book on this topic, Education that Works: The Neuroscience of Building a more Effective Higher Education. The book argues that due to how the brain works, students develop insight, maturity, and even a passion for their career growth, as well as key work-place skills and abilities that make them of good students, good citizens, and good employees.</p>
                    <button>PURCHASE HERE</button>
                </div>
            </div>
        </div>
    );
}



const LandingReferenceRow = () => {
    return (
        <div className='reference-row'>
            <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M7.5 21c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm8-12v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-4 2c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7z"/></svg>
                <p>PODCASTS</p>
            </div>
            <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M14 0v10l2-1.518 2 1.518v-10h4v24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h9zm6 20h-14.505c-1.375 0-1.375 2 0 2h14.505v-2z"/></svg>
                <p>BOOKS</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-16 5h5v-4h-5v4zm12 2h-12v1h12v-1zm0-3h-5v1h5v-1zm0-3h-5v1h5v-1z"/></svg>
                <p>SHORT BLOGS</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.602 4.075c2.201 1.174 4.904 3.254 6.398 5.252-1.286-.9-3.011-1.027-5.058-.549.222-1.469-.185-3.535-1.34-4.703zm-.825 6.925s1.522-7-3.335-7h-5.442v20h16v-10.629c0-3.42-4.214-3.116-7.223-2.371zm-.318-8l-1.459-1h-9v20h1v-19h9.459zm-2.443-2l-1.5-1h-8.516v20h1v-19h9.016z"/></svg>
                <p>LONG BLOGS</p>
            </div>
        </div>
    )
}




const LandingSpaceRow = (args) => {
    return (
        <div className={'space-row '+args.spec}>
            <br/>
            <br/>
            <br/>
        </div>
    )
}



const LandingAd = () => {
    return (
        <div className='landing-advertisement'>
            <div>
                
            </div>
        </div>
    )
}





/**
 * 
 * @param {*} args 
 * @returns 
 */
const Landing = (args) => {
    return (
		<div className='container'>
			<LandingHeader />
            <LandingQuote />
            <LandingSpaceRow />
            <LandingBrain />
            <LandingSpaceRow spec='switch-img-position-top' />
            <LandingBlogs />
            <LandingSpaceRow spec='switch-img-position-center' />
            <LandingBooks />
            <LandingReferenceRow />
            <LandingAd />
            <Footer />
		</div>
    );
}

export default Landing;