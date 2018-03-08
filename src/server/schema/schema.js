export default `
  type User {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    user(id: Int): User,
    users: [User]
  }

  schema {
    query: Query
  }
`;
