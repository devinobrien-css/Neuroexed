import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";


import UserProfile from '../pages/user/user';

export const FETCH_USERS = gql`
  query FetchUsers {
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
/** Fetches and returns list of all users
 * 
 * @returns 
 */
export function FetchUsers() {
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




export const FETCH_USER = gql`
    query Users($where: UserWhere) {
        users(where: $where) {
            id
            first
            last
            title
            img
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
/** Reaches to Apollo Server, returns rendered user page
 * 
 * @param {*} args 
 * @returns 
 */
export function FetchUser(args) {
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
      ))	
);
}

