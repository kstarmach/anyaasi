import React from 'react';
import { useQuery } from '@apollo/client';
import { useUserContext } from '../UserContext';
import { GET_ANIME_LIST } from '../queries';
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
      <Carousel
        data={sortedEntries}
        title={"Popular"}
        height={400}
        width={300}
      />
    </>
  );
}

export default Popular;
