import BadgeIndicator from './BadgeIndicator';
import OverlayInfo from './OverlayInfo';
import { Link } from 'react-router-dom';

function Card({ entry, height, width, coverImage }) {
    //const { nextAiringEpisode, episodes, title, averageScore, genres, id } = entry.media;
    const { nextAiringEpisode, episodes, title, averageScore, genres, id } = entry;
    return (
        <div className='mb-16 ' >
            <Link to={`/anime/${id}`} >
                <div
                    className="relative"
                    style={{ height, width }}
                >
                    <div className="h-full w-auto">
                        <img
                            src={coverImage}
                            alt="Anime Cover"
                            className="rounded-xl h-full w-full object-cover   inset-20  rounded-lg shadow-[rgba(0,0,5,0.3)_10px_5px_4px_0px]"
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
