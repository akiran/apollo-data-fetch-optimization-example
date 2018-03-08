import React, { Component } from "react";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {userQuery} from '../data/queries'

class User extends Component {
  render() {
    const {data: {loading, user}} = this.props
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


export default graphql(userQuery)(User);
