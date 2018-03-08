import React, { Component } from "react";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {usersQuery} from '../data/queries'

class Users extends Component {
  render() {
    const {data: {loading, users}} = this.props
    if (loading) {
      return null
    }
    return (
      <div>
        {users.map(user=> <div key={user.id}>{user.firstName} {user.lastName}</div>)}
      </div>
    )
  }
}


export default graphql(usersQuery)(Users);
