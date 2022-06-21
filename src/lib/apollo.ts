import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o8nc071a7901xx2w78frrj/master",
  cache: new InMemoryCache(),
});
