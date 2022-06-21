import ReactDOM from 'react-dom';
import React from 'react';


import './user.css';




/**
 * Fetches general list of all users
 * @returns 
 */
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
};

function FetchUser(email) {

	const { loading, error, data } = useQuery(FETCH_USER,{
		variables: {
			where :{
				email : email
			}
		}
	});

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


function Users() {
  return (
    <ApolloProvider client={client}>
		<FetchUser email="dob@jg.c" />
        {/* <FetchUsers /> */}
    </ApolloProvider>
  );
}

export default Users;