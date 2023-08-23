
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
        description
    } = data.Media;

    return (
        <>
            <div className="flex space-x-4 md:max-lg:flex">
                <div className="w-1/4">
                    <StatisticsSection
                        coverImage={coverImage.extraLarge}
                        title={title.userPreferred}
                        episodes={episodes}
                        nextAiringEpisode={nextAiringEpisode.episode}
                        averageScore={averageScore}
                        popularity={popularity}
                    />
                </div>

                <div className="w-3/4">
                    <DescriptionSection
                        title={title.userPreferred}
                        description={description}
                        bannerImage={bannerImage}
                    />

                    <DownloadSection />
                </div>
            </div>
        </>

    );
}

export default AnimeDetails;