import { gql } from '@apollo/client'

export const GET_ANIME_LIST = gql`
  query ($userId: Int) {
    MediaListCollection(userId: $userId, type: ANIME, status: CURRENT) {
      lists {
        name
        isCustomList
        isSplitCompletedList
        status
        entries {
          progress
          media {
            title {
              userPreferred
            }
            coverImage {
              extraLarge
            }
            episodes
            nextAiringEpisode {
              episode
              timeUntilAiring
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_DATA = gql`
  query ($name: String) {
    User(name: $name) {
        id
        name
        avatar {
          large
        }
      }
  }
`;
