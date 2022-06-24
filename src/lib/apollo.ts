import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
  // @see https://github.com/apollographql/apollo-client/issues/9066
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
