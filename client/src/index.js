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


const client = new ApolloClient({
  uri: ' http://localhost:4000/',
  cache: new InMemoryCache()
});

const FETCH_USERS = gql`
  query fetchUsers {
    users{
      id
      first
      last
      email
      skillsConnection {
        edges {
          rating
          node {
            title
          }
        }
      }
    }
  }
`;

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



const FETCH_USER = gql`
    query FetchUser($where: UserWhere) {
        users(where: $where) {
            id
            first
            last
            email
            skillsConnection {
                edges {
                    rating
                    node {
                        title
                    }
                }
            }
        }
    }   
`;
function FetchUser(args) {
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
                    Welcome {first} {last} <br/>
                    Your Skills:
                    {skillsConnection.edges.map(({rating,node}) => (
                        <p>{rating} -- {node.title}</p>
                    ))}
            </div>
        ))	
	);
}

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
                <FetchUser email="dob@jg.c" />
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
 * }
 * @returns the sections for the page requested
 */
const ContentBin = (args) => {
    return (
        <div className='container'>
            <DataReach req={args.req} />
        </div>
    )
}


/** Main Application Container - controls page functionality/content rendering
 * @returns the current user requested page
 */
const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <ContentBin req='USER'/>
        </>
    );
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);