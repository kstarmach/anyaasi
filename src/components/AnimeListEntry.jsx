import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import BadgeIndicator from './BadgeIndicator';
import BottomTitle from './BottomTitle';
import TopTitle from './TopTitle'; // Import the new component

function AnimeListEntry({ entry }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const { coverImage, nextAiringEpisode, episodes, title, averageScore, genres } = entry.media;

    return (
        <div
            className="relative anime-entry mb-60"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="h-full w-auto">
                <img
                    src={coverImage.extraLarge}
                    alt="Anime Cover"
                    className="rounded-xl h-full w-full object-cover  shadow-2xl"
                />
                {nextAiringEpisode && nextAiringEpisode.episode > 0 && (
                    <BadgeIndicator
                        episodeDifference={nextAiringEpisode.episode - entry.progress - 1}
                    />
                )}
                {/* {isHovered && (
                    <>
                        <TopTitle
                            nextAiringEpisode={nextAiringEpisode}
                            progress={entry.progress}
                            totalEpisodes={episodes}
                        />
                    </>
                )} */}
                <BottomTitle
                    title={title.userPreferred}
                    hasNewNextAiringEpisode={!!nextAiringEpisode}
                    progress={entry.progress}
                    totalEpisodes={episodes}
                    averageScore={averageScore}
                    genres={genres}
                />
            </div>
        </div>
    );
}

export default AnimeListEntry;
