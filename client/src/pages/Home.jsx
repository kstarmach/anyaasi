import { useSuspenseQuery } from "@apollo/client";
import { useUserContext } from "../UserContext";
import { GET_ANIME_LIST } from "../queries";

import Carousel from "../components/Carousel";
import Login from './Login';

import { extractAnimeList, currentWatchingFilter, recentlyAddedFilter } from "../lib/filters";
import { Suspense } from "react";
import { RecentSkeleton, WatchingSkeleton } from "../components/ui/skeletons";


const WatchingCarousel = ({ userId }) => {
  const { data } = useSuspenseQuery(GET_ANIME_LIST, {
    variables: { userId: userId },
  });

  const watching = currentWatchingFilter(extractAnimeList(data));


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

const RecentCarousel = ({ userId }) => {
  const { data } = useSuspenseQuery(GET_ANIME_LIST, {
    variables: { userId: userId },
  });

  const result = recentlyAddedFilter(extractAnimeList(data));
  if (result.length > 0) {


    return (
      <Carousel
        data={result}
        title={"Recently Added"}
        height={300}
        width={500}
        carouselType="normal"
      />
    )
  }
  return '';
}


const Anilist = ({ userId }) => {
  return (
    <div>
      <Suspense fallback={<WatchingSkeleton />}>
        <WatchingCarousel userId={userId} />
      </Suspense>
      <Suspense fallback={<RecentSkeleton />}>
        <RecentCarousel userId={userId} />
      </Suspense>
    </div>
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