import { gql } from '@apollo/client'

const GET_POSTS = gql`
  query GetPosts {
    allPosts(count: 25) {
      id
      title
      body
      published
      createdAt
      author {
        id
        firstName
        lastName
        avatar
      }
    }
  }
`

export default GET_POSTS
