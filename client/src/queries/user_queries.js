import {gql} from "@apollo/client";



export const FETCH_USER = gql`
    query Users($where: UserWhere) {
        users(where: $where) {
            id
            first
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
