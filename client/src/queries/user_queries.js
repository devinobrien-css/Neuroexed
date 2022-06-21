import {gql} from "@apollo/client";



const FETCH_USER = gql`
	query Users($where: where) {
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


const FETCH_USERS = gql`
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