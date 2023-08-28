import React from 'react';
import { useQuery } from '@apollo/client';
import { useUserContext } from '../UserContext';
import { GET_ANIME_LIST } from '../queries';
import AnimeListEntry from './AnimeListEntry';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';


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
    <>
      {/* <p className='text-2xl font-semibold mb-5'>Popular</p> */}
      {/* <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 ">
        {sortedEntries.map((entry) => (
          <Link to={`/anime/${entry.media.id}`} key={entry.media.title.userPreferred} >
            <AnimeListEntry entry={entry} />
          </Link>
        ))}
      </div> */}

      <Carousel data={sortedEntries} />

    </>
  );
}

export default Popular;
