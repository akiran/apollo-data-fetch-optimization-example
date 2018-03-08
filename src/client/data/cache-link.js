import gql from 'graphql-tag'
import {ApolloLink, Observable} from 'apollo-link';
import { graphql } from 'graphql-anywhere/lib/async';

function getQuery(users) {
  const userFields = users.reduce((acc, user) => {
    return `
      ${acc}
      user${user.id}: user(id: ${user.id}) {
        id
        firstName
        lastName
      }
    `
  }, '')

  return gql`
    {
      ${userFields}
    }
  `
}

export function createCacheLink(config) {
  const {cache} = config
  return new class CacheLink extends ApolloLink {
    request(operation, forward) {
      const subscriber = forward(operation)
      return new Observable(observer => {
        const observerErrorHandler = observer.error.bind(observer);
        const subscription = subscriber.subscribe({
          next: ({ data, errors }) => {
            const users = data.users
            const newData = users.reduce((acc, user) => {
              acc[`user${user.id}`] = user
              return acc
            }, {})

            cache.writeQuery({
              query: getQuery(users),
              data: newData
            })
            observer.next({
              data,
              errors
            })
          },
          error: observerErrorHandler,
          complete: observer.complete.bind(observer)
        });

        return () => {
          if (subscription) subscription.unsubscribe();
        };
      });
    }
  }
}
