import React from 'react';
import { useQuery } from '@apollo/client';
import { useUserContext } from '../UserContext';
import { GET_ANIME_LIST } from '../queries';
import AnimeListEntry from './AnimeListEntry';
import { Link } from 'react-router-dom';

function AnimeInfo() {
  const { user } = useUserContext();

  if (!user) {
    return <p>You need to log in</p>;
  }

  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    variables: { userId: user.id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const animeListCollection = data.MediaListCollection;
  const animeLists = animeListCollection.lists;

  // Sort entries by progress in ascending order
  const sortedEntries = animeLists.flatMap(list => list.entries).sort((a, b) => b.progress - a.progress);




  return (
    <div className="inline-grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {sortedEntries.map((entry) => (
        <Link to={`/anime/${entry.media.id}`} key={entry.media.title.userPreferred}>
          <AnimeListEntry entry={entry} />
        </Link>
      ))}
    </div>
  );
}

export default AnimeInfo;
