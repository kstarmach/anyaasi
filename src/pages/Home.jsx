import PopularCarousel from "../components/Carousel/PopularCarousel";
import RecentCarousel from "../components/Carousel/RecentCarousel";
import { useUserContext } from "../UserContext";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries";

const Home = () => {
    const { user } = useUserContext();

    const { loading, error, data } = useQuery(GET_ANIME_LIST, {
        variables: { userId: user?.id },
    });

    // Check if user.id exists before rendering or using data
    if (!user?.id) {
        // Handle the case when user.id is not available
        return <p>Loading...</p>;
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
}


export default Home;