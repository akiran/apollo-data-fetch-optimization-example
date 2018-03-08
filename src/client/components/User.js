import React, { Component } from "react";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {userQuery} from '../data/queries'

class User extends Component {
  render() {
    const {data: {loading, user1}} = this.props
    console.log(this.props)
    return null
    if (loading) {
      return null
    }
    return (
      <div>
        {user1.firstName} {user1.lastName}
      </div>
    )
  }
}


export default graphql(userQuery)(User);
