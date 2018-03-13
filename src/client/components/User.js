import React, { Component } from "react";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class User extends Component {
  render() {
    const {data: {loading, user}} = this.props
    console.log(this.props)
    if (loading) {
      return null
    }
    return (
      <div>
        {user.firstName} {user.lastName}
      </div>
    )
  }
}

const userQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`

export default graphql(userQuery)(User);
