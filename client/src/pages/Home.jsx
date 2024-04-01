import { useSuspenseQuery } from "@apollo/client";
import { useUserContext } from "../UserContext";
import { GET_ANIME_LIST } from "../queries";

import Carousel from "../components/Carousel";
import Login from './Login';

import { extractAnimeList, currentWatchingFilter } from "../lib/filters";
import { Suspense } from "react";
import { HomeSkeleton } from "../components/ui/skeletons";

const WatchingCarousel = ({ userId }) => {
  const { data } = useSuspenseQuery(GET_ANIME_LIST, {
    variables: { userId: userId },
  });

  const watching = currentWatchingFilter(extractAnimeList(data));

  if (watching.length > 0) {
    return (
      <Carousel
        data={watching}
        title={"Watching"}
        height={400}
        width={300}
        carouselType="normal"
      />
    )
  }
  return (
    <div className="flex justify-center">
      <h1>Nothing to find here</h1>
    </div>
  )
}

const Anilist = ({ userId }) => {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <WatchingCarousel userId={userId} />
    </Suspense>
  )
}

const Home = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Login />
  }

  if (user) {
    return <Anilist userId={user.id} />
  }
};



export default Home;