import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link"
import localStateResolvers from './local-state/resolvers'
import localStateDefaults from './local-state/defaults'
import { withClientState } from 'apollo-link-state'
import { createCacheLink } from './cache-link'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: localStateResolvers,
  defaults: localStateDefaults
});

const cacheLink = createCacheLink({
  cache
})

const link = ApolloLink.from([
  cacheLink,
  stateLink,
  new HttpLink()
])

const client = new ApolloClient({
  cache,
  link
});

// client.subscribe((data) => {
//   console.log('subscribe', data)
// })

console.log(client)

export default client
