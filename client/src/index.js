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


import {FETCH_USER,FETCH_USERS} from './queries/user_queries';


// establish server connection
const client = new ApolloClient({
  uri: ' http://localhost:4000/',
  cache: new InMemoryCache()
});


const UserProfile = (args) => {
    return (
        <div>
            {args.first} {args.last} <br/>
            -- {args.email}
            
        </div> 
    )
}



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
        data.users.map(({id, first, last, email, skillsConnection}) => (
            <UserProfile first={first} email={email} skills={skillsConnection} />
            
            
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
        console.log('fetching user ')
        return (
            <ApolloProvider client={client}>
                <FetchUser email={args.user_id} />
                {/* <FetchUsers /> */}
            </ApolloProvider>
        );
    }
    else if(args.req === 'ADMIN') {
        return (
            <ApolloProvider client={client}>
                <FetchAdmin email="dob@jg.c" />
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
    return (
        <div className='container'>
            <DataReach req={args.req} user_id={args.user_id}/>
        </div>
    )
}


/** Main Application Container - controls page functionality/content rendering
 * @returns the current user requested page
 */
const App = () => {
    //TODO: add functionality for page specification
    return (
        <>
            <Header />
            <Nav />
            <ContentBin req='USER' user_id='dob@jg.c'/>
        </>
    );
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);