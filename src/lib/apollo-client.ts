import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

/**
 * Apollo Client Configuration for Headless WordPress (WPGraphQL)
 * 
 * Current: Uses mock data endpoint
 * Production: Replace with actual WPGraphQL endpoint
 * 
 * Note: Apollo Client v4.x changed type exports - ApolloClient is no longer generic
 */

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
    || 'https://cms.trigonal.technology/graphql'

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: GRAPHQL_ENDPOINT,
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        caseStudies: {
                            keyArgs: false,
                            merge(existing, incoming) {
                                return incoming
                            },
                        },
                    },
                },
            },
        }),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
        },
    })
}

// Create a singleton client for the app
let apolloClient: ReturnType<typeof createApolloClient> | undefined

export function getApolloClient() {
    const client = apolloClient ?? createApolloClient()

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return client

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = client

    return client
}

export default getApolloClient
