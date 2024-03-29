
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { GET_ANIME_DETAILS } from "../../queries";
import DescriptionSection from './DescriptionSection';

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import Table from './Table';
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

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="mx-20 flex flex-col gap-8">
            <button
                className='bg-white color-black rounded-full p-2 self-start max-w-max'
                onClick={handleGoBack}
            >
                <ArrowLongLeftIcon className="h-5 w-5" />
            </button>

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