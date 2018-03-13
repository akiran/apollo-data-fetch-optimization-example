import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link"
import { createCacheLink } from './cache-link'

const cache = new InMemoryCache()

const cacheLink = createCacheLink({
  cache
})

const link = ApolloLink.from([
  cacheLink,
  new HttpLink()
])

const client = new ApolloClient({
  cache,
  link
});

export default client
