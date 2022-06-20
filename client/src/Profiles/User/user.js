import ReactDOM from 'react-dom';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const FETCH_USERS = gql`
query FetchUsers {
    users{
      first
      last
      email
      skills {
        title
      }
    }
  }
`;

import './user.css';

const Users = () => {
    // const { loading, error, data } = useQuery(FETCH_USERS);
  
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
  
    return (
      // <ul>
      //   { data.users.edges.map((edge, i) => (
      //     <li key={edge.node.first}>{edge.node.last}</li>
      //   ))}
      // </ul>
      <p>Testing</p>
    )
  }

  export default Users;