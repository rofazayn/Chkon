import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  makeVar,
  Observable,
} from '@apollo/client'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode from 'jwt-decode'
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../utils/jwt-operations'

export const refreshStatusVar = makeVar<string>('stale')

const NODE_ENV = process.env.NODE_ENV! || 'development'
// const serverEndpoint: string = `${
//   NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://api.chkon.co'
// }`
const serverEndpoint: string = `http://localhost:4000`

const httpLink = createHttpLink({
  uri: serverEndpoint + '/graphql',
})

httpLink.setOnError((error) => {
  console.log(error)
})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any
      Promise.resolve(operation)
        .then((operation) => {
          const accessToken = getAccessToken()
          const refreshToken = getRefreshToken()
          if (accessToken && refreshToken) {
            operation.setContext({
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'x-refresh-token': `Bearer ${refreshToken}`,
              },
            })
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
        })
        .catch(() => {
          observer.error.bind(observer)
        })

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const accessToken = getAccessToken()
    const refreshToken = getRefreshToken()

    if (!accessToken || !refreshToken) {
      setAccessToken(null)
      setRefreshToken(null)
      return false
    }

    try {
      const { exp }: any = jwtDecode(accessToken)
      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch {
      return false
    }
  },
  fetchAccessToken: async () => {
    const refreshMutation = `
      mutation {
        refresh {
          accessToken
          refreshToken
        }
      }
    `

    const refreshToken = getRefreshToken()

    if (refreshToken) {
      try {
        const { exp }: any = jwtDecode(refreshToken as string)
        if (Date.now() >= exp * 1000) {
          refreshStatusVar('fail')
          return null
        }
      } catch {
        return null
      }

      const response = await fetch(serverEndpoint + '/graphql', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-refresh-token': `Bearer ${refreshToken}`,
        },
        body: JSON.stringify({
          query: refreshMutation,
        }),
      })

      return response.json()
    }
    return null
  },
  handleFetch: (accessToken) => {
    if (accessToken) {
      refreshStatusVar('stale')
      setAccessToken(accessToken)
    } else {
      refreshStatusVar('fail')
      setAccessToken(null)
    }
  },
  handleResponse: (_operation, _accessTokenField) => (response: any) => {
    if (
      response.data.refresh.accessToken &&
      response.data.refresh.refreshToken
    ) {
      setRefreshToken(response.data.refresh.refreshToken)
      setAccessToken(response.data.refresh.accessToken)
    }
    return { accessToken: response.data?.refresh?.accessToken }
  },
  handleError: (err) => {},
})

const apolloClient = new ApolloClient({
  uri: serverEndpoint,
  cache: new InMemoryCache(),
  link: ApolloLink.from([tokenRefreshLink, requestLink, httpLink]),
})

export default apolloClient
