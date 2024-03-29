
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { GET_ANIME_DETAILS } from "../../queries";
import DescriptionSection from './DescriptionSection';


import Table from './Table';
import { BackButton } from '../ui/Buttons';
const AnimeDetails = () => {

    const { animeId } = useParams();
    const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
        variables: { id: animeId },
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    const {
        title,
        // episodes,
        coverImage,
        bannerImage,
        averageScore,
        // popularity,
        // nextAiringEpisode,
        description,
        genres,
        seasonYear
    } = data.Media;



    return (
        <div className="flex flex-col gap-8">
            <BackButton />

            <DescriptionSection
                coverImage={coverImage.extraLarge}
                title={title.userPreferred}
                description={description}
                bannerImage={bannerImage}
                genres={genres}
                seasonYear={seasonYear}
                averageScore={averageScore}
            />

            <Table
                title={title.userPreferred}

            />
        </div>

    );
}

export default AnimeDetails;