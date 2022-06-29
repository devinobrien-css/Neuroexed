import React from 'react';

/* STYLESHEET IMPORTS */
import './news.css'; //contains styles specific to the user page
import '../../components/content_sections.css'; //contains general container styles

/* COMPONENT AND ELEMENT IMPORTS */
import Footer from '../../footer';



const NewsHeader = () => {
    return (
        <div className='news-header'>
            <div>
                <p>Latest news from CNEE</p>
            </div>
            <div>
                <p></p>
            </div>
        </div>


    );
}



const News = () => {
    return (
        <div className='container'>
            <NewsHeader />

            <Footer />
		</div>
    )
}

export default News;