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
  return (
    <>
      <PopularCarousel animeLists={data.MediaListCollection.lists} />
      <RecentCarousel animeLists={data.MediaListCollection.lists} />
    </>
  )
}

const MyAnimeList = ({ username }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getMyAnimeList = async () => {
      try {
        const result = await axios.get(`/myanimelist/${username}`);

        setList(result.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
        // Handle the error as needed
      }
    };

    getMyAnimeList();
  }, [username]);


  return (
    <>
      <p>My Anime List</p>
      {list !== null ? (
        list.map((item) => (
          <p key={item.node.id}>{item.node.title}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
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
    return <MyAnimeList username={user.name} />
  }

};



export default Home;