import ReactDOM from 'react-dom/client';
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";


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
	query Users($email: String!) {
		users(email: $email) {
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
	const { loading, error, data } = useQuery(FETCH_USER,{variables:{user_email}});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div>
				Welcome {first} {last} <br/>
				Your Skills:
				{skillsConnection.edges.map(({rating,node}) => (
					<p>{rating} -- {node.title}</p>
				))}
		</div>
	);
}





const App = () => {
  return (
    <ApolloProvider client={client}>
        <FetchUser email="dob@jg.c" />
        <FetchUsers />
    </ApolloProvider>
  );
}


ReactDOM.createRoot(document.getElementById('app')).render(<App />);