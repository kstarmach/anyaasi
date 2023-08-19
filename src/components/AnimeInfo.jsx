
import { useQuery } from '@apollo/client';
import { useUserContext } from '../UserContext';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { GET_ANIME_LIST } from '../queries';

function CountdownTimer({ nextEpisodeTime, nextEpisodeNumber }) {
  const [timeRemaining, setTimeRemaining] = useState(nextEpisodeTime.diff(moment(), 'seconds'));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = nextEpisodeTime.diff(moment(), 'seconds');
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysRemaining = Math.floor(timeRemaining / 86400);
  const hoursRemaining = Math.floor((timeRemaining % 86400) / 3600);
  const minutesRemaining = Math.floor((timeRemaining % 3600) / 60);

  const timeParts = [];
  if (daysRemaining > 0) timeParts.push(`${daysRemaining}d`);
  if (hoursRemaining > 0) timeParts.push(`${hoursRemaining}h`);
  if (minutesRemaining > 0) timeParts.push(`${minutesRemaining}m`);

  const timeString = timeParts.length > 0 ? `${timeParts.join(' ')}` : '';

  return (
    <>
      <p>Ep {nextEpisodeNumber} </p>
      <p>{timeString}</p>
    </>);
}


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

  return (
    <>
      {/* <h1 className='mb-10'>Anime List</h1> */}

      {animeLists.map((list) => (
        <div className='inline-grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 ' key={list.name}>
          {list.entries.map((entry) => (
            <div key={entry.media.title.userPreferred} className="relative anime-entry">
              <div className="relative h-96">
                <img src={entry.media.coverImage.extraLarge} alt="Anime Cover" className='rounded-xl h-full w-full object-cover shadow-md' />
                {entry.media.nextAiringEpisode && (
                  <div className="countdown-overlay absolute top-0 left-0 p-4 text-white bg-black bg-opacity-60 rounded-t-xl w-full">
                    <CountdownTimer
                      nextEpisodeTime={moment.unix(entry.media.nextAiringEpisode.timeUntilAiring + moment().unix())}
                      nextEpisodeNumber={entry.media.nextAiringEpisode.episode}
                    />
                  </div>
                )}
                <div className="anime-details-overlay absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-60 rounded-b-xl">
                  <h3>{entry.media.title.userPreferred}</h3>
                  {/* <p>Episodes: {entry.media.episodes}</p>
                  <p>Progress: {entry.progress}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default AnimeInfo;