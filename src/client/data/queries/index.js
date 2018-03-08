import gql from 'graphql-tag'

export const detailsQuery = gql`
  {
    details @client {
      showLastName
    }
  }
`

export const usersQuery = gql`
  {
    users {
      id
      firstName
      lastName
    }
  }
`

export const userQuery = gql`
  query user($id: Int) {
    user1: user(id: $id) {
      id
      firstName
      lastName
    }
  }
`
