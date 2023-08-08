import { gql } from "@apollo/client";

export const USER = gql`
query {
    User(name: "starmil") {
      name
      id
      avatar {
        large
        medium
      }
      siteUrl
      updatedAt
    }
  }  
`