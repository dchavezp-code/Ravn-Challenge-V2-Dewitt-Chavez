import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://swapi-graphql.netlify.app'
    })
})
export default client;