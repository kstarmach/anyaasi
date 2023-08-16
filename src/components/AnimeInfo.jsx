import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_ANIME_LIST = gql`
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

const variables = {
  userId: 444197,
};

function AnimeInfo() {
  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    variables,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const animeListCollection = data.MediaListCollection;
  const animeLists = animeListCollection.lists;

  return (
    <div>
      <h1>Anime List</h1>
      <div className="horizontal-list">
        {animeLists.map((list) => (
          <div key={list.name} className="anime-card">
            <h2>{list.name}</h2>
            <ul>
              {list.entries.map((entry) => (
                <li key={entry.media.title.userPreferred}>
                  <div className="anime-entry">
                    <img src={entry.media.coverImage.extraLarge} alt="Anime Cover" />
                    <div className="anime-details">
                      <h3>{entry.media.title.userPreferred}</h3>
                      <p>Episodes: {entry.media.episodes}</p>
                      {entry.media.nextAiringEpisode && (
                        <p>Next Episode: {entry.media.nextAiringEpisode.episode} in {entry.media.nextAiringEpisode.timeUntilAiring} minutes</p>
                      )}
                      <p>Progress: {entry.progress}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimeInfo;
