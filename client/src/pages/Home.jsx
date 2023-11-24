import PopularCarousel from "../components/Carousel/PopularCarousel";
import RecentCarousel from "../components/Carousel/RecentCarousel";
import { useUserContext } from "../UserContext";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries";
import Login from './Login';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  const { user } = useUserContext();

  useEffect(() => {
    const getMyAnimeList = async () => {
      if (user) {
        const result = await axios.get(`/myanimelist/${user.name}`);
        console.log(result);
      }
    }
    getMyAnimeList();
  }, [user])



  const { loading, error, data, refetch } = useQuery(GET_ANIME_LIST, {
    variables: { userId: user?.id },
    skip: !user?.id || user?.type !== 'myanimelist', // Skip the query if user.id is falsy or user.type is not 'myanimelist'
  });


  // useEffect to refetch data when user.id becomes available
  useEffect(() => {
    if (user?.id) {
      refetch({ userId: user.id });
    }
  }, [user?.id, refetch]);

  // Check if user.id exists before rendering or using data
  if (!user?.id) {
    // Handle the case when user.id is not available
    return <Login />;
  }

  if (user.type === 'myanimelist') {
    return <p>MYANIMELIST</p>
  }
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
      <PopularCarousel animeLists={animeLists} />
      <RecentCarousel animeLists={animeLists} />
    </>
  );
};



export default Home;