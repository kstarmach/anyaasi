import PopularCarousel from "../components/Carousel/PopularCarousel";
import RecentCarousel from "../components/Carousel/RecentCarousel";
import { useUserContext } from "../UserContext";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries";
import Login from './Login';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  let mediaWithProgress = [];
  for (let i = 0; i < data.MediaListCollection.lists[0].entries.length; i++) {
    const newObj = {
      ...data.MediaListCollection.lists[0].entries[i].media,
      progress: data.MediaListCollection.lists[0].entries[i].progress,
    };
    mediaWithProgress.push(newObj);
  }
  return (
    <>
      <PopularCarousel animeLists={mediaWithProgress} />
      <RecentCarousel animeLists={mediaWithProgress} />
    </>
  )
}

const MyAnimeList = ({ accessToken }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getMyAnimeList = async () => {
      try {
        const result = await axios.get(`/myanimelist/${accessToken}`);

        setList(result.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
        // Handle the error as needed
      }
    };

    getMyAnimeList();
  }, [accessToken]);

  if (list) {
    return (
      <>
        <PopularCarousel animeLists={list} />
        <RecentCarousel animeLists={list} />
      </>
    );
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