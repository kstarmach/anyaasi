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
            id
            title {
              userPreferred
            }
            coverImage {
              extraLarge
              medium
              large
            }
            bannerImage
            episodes
            nextAiringEpisode {
              episode
              timeUntilAiring
            }
            averageScore
            genres
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

export const GET_ANIME_DETAILS = gql`
query($id: Int) {  
    Media(id:$id)
      {
        title {
          userPreferred
        }
        episodes
        coverImage {
          extraLarge
        }
        bannerImage
        averageScore
        popularity
        nextAiringEpisode{
          episode
        }
        description
        genres
        seasonYear
      }    
  }    
`;

export const SEARCH_ANIME = gql`
query($q: String){
  Page(page: 0, perPage: 5) {
    media(search: $q, sort:POPULARITY_DESC, type:ANIME) {
      id
      title {
        userPreferred
      }
      startDate {
        year
        month
        day
      }
      coverImage{
        large
      }
      averageScore
      format
    }
  }
}`

export const GET_POPULAR_ANIME = gql`
query($season: MediaSeason, $seasonYear: Int){
  Page(page: 0, perPage: 25) {
    media(type: ANIME, sort: SCORE_DESC, season: $season, seasonYear: $seasonYear) {
      id
      title {
        userPreferred
      }
      coverImage {
        extraLarge
        medium
        large
      }
      bannerImage
      episodes
      nextAiringEpisode {
        episode
        timeUntilAiring
      }
      averageScore
      genres
    }
  }
}`