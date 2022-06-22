import ReactDOM from 'react-dom/client';
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";

import './index.css';
import Header from './header';
import Nav from './nav';
import UserProfile from './pages/users/user';
import Login from './pages/login/login';

import {FETCH_USER,FETCH_USERS} from './queries/user_queries';


// establish server connection
const client = new ApolloClient({
  uri: ' http://localhost:4000/',
  cache: new InMemoryCache()
});






function FetchUsers() {
  const { loading, error, data } = useQuery(FETCH_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.users.map(({id, first, last, email, skillsConnection}) => (
    <div key={id}>
			{id}
			{first} {last} <br/>
			-- {email}
			{skillsConnection.edges.map(({rating,node}) => (
				<p>{rating} -- {node.title}</p>
			))}
    </div>
  ));
}




/** Reaches to Apollo Server, returns rendered user page
 * 
 * @param {*} args 
 * @returns 
 */
function FetchUser(args) {
    //query data
	const { loading, error, data } = useQuery(FETCH_USER,{variables:{
        "where": {
            "email": args.email
        }
    }});

    //validate safe retrieval
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
    if (data.users.length != 1) return <p>Internal Duplication Error</p>;

    //return UserProfile
	return (
        data.users.map(({id, first, last, title, email, skillsConnection}) => (
            <UserProfile first={first} last={last} title={title} email={email} skills={skillsConnection} />
            
            
            // <div>
            //         Welcome {first} {last} <br/>
            //         Your Skills:
            //         {skillsConnection.edges.map(({rating,node}) => (
            //             <p>{rating} -- {node.title}</p>
            //         ))}
            // </div>
        ))	
	);
}




//TODO:
function FetchAdmin(args) {
    const user_email = args.email;
	const { loading, error, data } = useQuery(FETCH_USER,{variables:{
        "where": {
            "email": "dob@jg.c"
        }
    }});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
    if (data.users.length != 1) return <p>Internal Duplication Error</p>;

	return (
        data.users.map(({id, first, last, email, skillsConnection}) => (
            <div>
                    Hello Admin {first} {last} <br/>
                    Your Skills:
                    {skillsConnection.edges.map(({rating,node}) => (
                        <p>{rating} -- {node.title}</p>
                    ))}
            </div>
        ))	
	);
}



/** Reaches to Apollo Server and renders objects
 * 
 * @param {*} args 
 * @returns 
 */
const DataReach = (args) => {
    if(args.req === 'USER'){
        return (
            <ApolloProvider client={client}>
                <FetchUser email={args.user_id} />
            </ApolloProvider>
        );
    }
    else if(args.req === 'ADMIN') {
        return (
            <ApolloProvider client={client}>
                <FetchAdmin email={args.user_id} />
            </ApolloProvider>
        );
    }
    else {
        return (
            <p>Request Undefined</p>
        );
    }
}


/** Holds the current page's sections
 * 
 * @param {String} args {
 *      req : specifies the type of page to be rendered (user, admin, etc)
 *      user_id : 
 * }
 * @returns the sections for the page requested
 */
const ContentBin = (args) => {
    if(args.req === 'USER'){
        return (
            <div className='container'>
                <DataReach req={args.req} user_id={args.user_id}/>
            </div>
        )
    }
    else if(args.req === 'PEOPLE'){
        return (
            <div className='container'>
                <p>PEOPLE</p>
            </div>
        )
    }
    else if(args.req === 'PROJECTS'){
        return (
            <div className='container'>
                <p>PROJECTS</p>
            </div>
        )
    }
    else if(args.req === 'SKILLS'){
        return (
            <div className='container'>
                <p>SKILLS</p>
            </div>
        )
    }
    else {
        return (
            <div className='container'>
                <p>UNKNOWN</p>
            </div>
        )
    }
        
}




/** Main Application Container - controls page functionality/content rendering
 * @returns the current user requested page
 */
const App = () => {
    //TODO: ADD AUTH HERE
    const auth_user_email = 'dobrien@jg.com';

    const [currentState, setState] = React.useState("");

    if(currentState === "")
        setState("USER");

    const handleToggle = (state) => {
        setState(state);
    };
    const stateFunctions = {'USER':()=>handleToggle('USER'), 'PEOPLE': ()=>handleToggle('PEOPLE'), 'PROJECTS': ()=>handleToggle('PROJECTS'), 'SKILLS' : ()=>handleToggle('SKILLS')};

    //TODO: add functionality for page specification

    if(currentState  === 'USER') {
        return (
            <>
                <Header />
                <Nav current={currentState} functions={stateFunctions}/>
                <ContentBin req={currentState} user_id={auth_user_email}/>
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
                <Header />
                <Nav current={currentState} functions={stateFunctions}/>
                <ContentBin req={currentState} user_id={auth_user_email}/>
            </>
        );
    }
    else if(currentState  === 'PROJECTS') {
        return (
            <>
                <Header />
                <Nav current={currentState} functions={stateFunctions}/>
                <ContentBin req={currentState} user_id={auth_user_email}/>
            </>
        );
    }
    else if(currentState  === 'SKILLS') {
        return (
            <>
                <Header />
                <Nav current={currentState} functions={stateFunctions}/>
                <ContentBin req={currentState} user_id={auth_user_email}/>
            </>
        );
    }
        
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);