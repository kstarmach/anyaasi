import { useEffect, useState } from 'react';
import { useUserContext } from "../UserContext";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries";
import axios from 'axios';

import Login from './Login';
import Carousel from "../components/Carousel";

function recentlyAddedFilter(animeList) {
  return animeList
    .map(list => list)
    .filter(entry => entry.nextAiringEpisode) // Filter out entries with null nextAiringEpisode
    .sort((a, b) => {
      const airingA = a.nextAiringEpisode;
      const airingB = b.nextAiringEpisode;

      return airingB.timeUntilAiring - airingA.timeUntilAiring;
    })
    .filter(entry => entry.nextAiringEpisode.episode - 1 > entry.progress);
}

function currentWatchingFilter(animeList) {
  return animeList.map(a => a).sort((a, b) => b.progress - a.progress);
}

const Anilist = ({ userId }) => {
  const { loading, error, data, refetch } = useQuery(GET_ANIME_LIST, {
    variables: { userId: userId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  let animeList = [];
  for (let i = 0; i < data.MediaListCollection.lists[0].entries.length; i++) {
    const newObj = {
      ...data.MediaListCollection.lists[0].entries[i].media,
      progress: data.MediaListCollection.lists[0].entries[i].progress,
    };
    animeList.push(newObj);
  }

  const recentlyAdded = recentlyAddedFilter(animeList);

  const watching = currentWatchingFilter(animeList);

  return (
    <>
      <Carousel
        data={watching}
        title={"Watching"}
        height={400}
        width={300}
        carouselType="normal"
      />

      <Carousel
        data={recentlyAdded}
        title={"Recently Added"}
        height={250}
        width={460}
        carouselType="wide"
      />
    </>

  )
}

const MyAnimeList = ({ accessToken }) => {
  const [animeList, setAnimeList] = useState(null);

  useEffect(() => {
    const getMyAnimeList = async () => {
      try {
        const result = await axios.get(`/myanimelist/${accessToken}`);

        setAnimeList(result.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
        // Handle the error as needed
      }
    };

    getMyAnimeList();
  }, [accessToken]);

  if (animeList) {

    const recentlyAdded = recentlyAddedFilter(animeList);

    const watching = currentWatchingFilter(animeList);

    return (
      <>
        <Carousel
          data={watching}
          title={"Watching"}
          height={400}
          width={300}
          carouselType="normal"
        />

        <Carousel
          data={recentlyAdded}
          title={"Recently Added"}
          height={250}
          width={460}
          carouselType="wide"
        />
      </>

    )
  }
};

const Home = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Login />
  }

  if (user.provider === 'anilist') {
    return <Anilist userId={user.id} />
  }

  if (user.provider === 'myanimelist') {
    return <MyAnimeList accessToken={user.accessToken} />
  }

};



export default Home;