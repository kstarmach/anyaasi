import BadgeIndicator from './BadgeIndicator';
import OverlayInfo from './OverlayInfo';
import { Link } from 'react-router-dom';

function Card({ entry, height, width, coverImage }) {
    const { nextAiringEpisode, episodes, title, averageScore, genres, id } = entry.media;
    return (
        <div className='mb-16'>
            <Link to={`/anime/${id}`} >
                <div
                    className="relative"
                    style={{ height, width }}
                >
                    <div className="h-full w-auto">
                        <img
                            src={coverImage}
                            alt="Anime Cover"
                            className="rounded-xl h-full w-full object-cover  shadow-2xl"
                        />
                        {nextAiringEpisode && nextAiringEpisode.episode > 0 && (
                            <BadgeIndicator
                                episodeDifference={nextAiringEpisode.episode - entry.progress - 1}
                            />
                        )}
                        <OverlayInfo
                            title={title.userPreferred}
                            hasNewNextAiringEpisode={!!nextAiringEpisode}
                            progress={entry.progress}
                            totalEpisodes={episodes}
                            averageScore={averageScore}
                            genres={genres}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
