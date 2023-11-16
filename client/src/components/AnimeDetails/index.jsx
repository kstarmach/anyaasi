
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ANIME_DETAILS } from "../../queries";
import DownloadSection from './DownloadSection';
import StatisticsSection from './StatisticsSection';
import DescriptionSection from './DescriptionSection';


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
        episodes,
        coverImage,
        bannerImage,
        averageScore,
        popularity,
        nextAiringEpisode,
        description,
        genres,
        seasonYear
    } = data.Media;

    return (
        <div className="mx-20">
            {/* <StatisticsSection
                title={title.userPreferred}
                episodes={episodes}
                nextAiringEpisode={nextAiringEpisode?.episode}
                averageScore={averageScore}
                popularity={popularity}
            /> */}

            <DescriptionSection
                coverImage={coverImage.extraLarge}
                title={title.userPreferred}
                description={description}
                bannerImage={bannerImage}
                genres={genres}
                seasonYear={seasonYear}
                averageScore={averageScore}
            />
            <DownloadSection title={title.userPreferred} />
        </div>

    );
}

export default AnimeDetails;