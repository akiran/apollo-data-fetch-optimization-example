import React, { Component } from "react";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import User from './User'

class Users extends Component {
  render() {
    const {data: {loading, users}} = this.props
    if (loading) {
      return null
    }
    console.log(users)
    return (
      <div>
        {users.map(user=> <User key={user.id} id={user.id} />)}
        {/* {users.map(user=> <div key={user.id}>{user.firstName}</div>)} */}
      </div>
    )
  }
}

const usersQuery = gql`
  query usersQuery {
    users {
      id
      firstName
      lastName
    }
  }
`

export default graphql(usersQuery)(Users);
