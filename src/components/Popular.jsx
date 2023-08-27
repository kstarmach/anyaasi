import React from 'react';
import { useQuery } from '@apollo/client';
import { useUserContext } from '../UserContext';
import { GET_ANIME_LIST } from '../queries';
import AnimeListEntry from './AnimeListEntry';
import { Link } from 'react-router-dom';

function Popular() {
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
    <div className='ml-20'>
      <p className='text-2xl font-semibold mb-5'>Popular</p>
      <div className="grid grid-cols-4 gap-8 ">
        {sortedEntries.map((entry) => (
          <Link to={`/anime/${entry.media.id}`} key={entry.media.title.userPreferred}>
            <AnimeListEntry entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Popular;
