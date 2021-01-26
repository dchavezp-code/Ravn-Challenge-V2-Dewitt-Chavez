import { ApolloClient, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    allPeople:{
                        keyArgs:false,
                    }
                }
            }
        }
    }),
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
})
export default client;