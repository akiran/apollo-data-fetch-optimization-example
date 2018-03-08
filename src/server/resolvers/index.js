const users = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Henry', lastName: 'Ford'},
  {id: 3, firstName: 'Adam', lastName: 'Smith'},
  {id: 4, firstName: 'David', lastName: 'Jones'},
]


export default {
  Query: {
    user(_, args, ctx) {
      return users.find(user => user.id === args.id)
    },
    users(_, args, ctx) {
      return users
    }
  }
};
