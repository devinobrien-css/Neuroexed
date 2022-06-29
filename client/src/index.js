import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import Nav from './nav';
import Landing from './pages/landing/landing';
import People from './pages/people/people';
import Projects from './pages/projects/projects';
import Affiliations from './pages/affiliations/affiliations';
import Books from './pages/books/books';
import News from './pages/news/news';

/** Main Application Container - controls page functionality/content rendering
 * @returns the current user requested page
 */
const App = () => {
    const [currentState, setState] = React.useState("");

    if(currentState === "")
        setState("HOME");

    const handleToggle = (state) => {
        setState(state);
    };
    const stateFunctions = {'HOME':()=>{handleToggle('HOME'); document.querySelector('.nav').classList.remove('show');}, 'PEOPLE': ()=>{handleToggle('PEOPLE'); document.querySelector('.nav').classList.remove('show');}, 'PROJECTS': ()=>{handleToggle('PROJECTS'); document.querySelector('.nav').classList.remove('show');}, 'NEWS': ()=>{handleToggle('NEWS'); document.querySelector('.nav').classList.remove('show');}, 'PUBLICATIONS': ()=>{handleToggle('PUBLICATIONS'); document.querySelector('.nav').classList.remove('show');}, 'AFFILIATIONS' : ()=>{handleToggle('AFFILIATIONS'); document.querySelector('.nav').classList.remove('show');}};

    //TODO: add functionality for page specification

    if(currentState  === 'HOME') {
        return (
            <>
                <Nav current={currentState} functions={stateFunctions}/>
                <Landing />
            </>
        );
    }
    else if(currentState  === 'LOGIN'){
        return (
            <>
                <Login />
            </>
        )
    }
    else if(currentState  === 'PEOPLE') {
        console.log('current ' + currentState)
        return (
            <>
                <Nav current={currentState} functions={stateFunctions}/>
                <People />
            </>
        );
    }
    else if(currentState  === 'PROJECTS') {
        return (
            <>
                <Nav current={currentState} functions={stateFunctions}/>
                <Projects />
            </>
        );
    }
    else if(currentState  === 'NEWS') {
        return (
            <>
                <Nav current={currentState} functions={stateFunctions}/>
                <News />
            </>
        );
    }
    else if(currentState  === 'PUBLICATIONS') {
        return (
            <>
                <Nav current={currentState} functions={stateFunctions}/>
                <Books />
            </>
        );
    }
    else if(currentState  === 'AFFILIATIONS') {
        return (
            <>
                <Nav current={currentState} functions={stateFunctions}/>
                <Affiliations />
            </>
        );
    }
        
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);