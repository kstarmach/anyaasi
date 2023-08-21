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

    const { coverImage, nextAiringEpisode, episodes, title } = entry.media;

    return (
        <div
            className="relative anime-entry"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-96">
                <img
                    src={coverImage.extraLarge}
                    alt="Anime Cover"
                    className="rounded-xl h-full w-full object-cover shadow-md"
                />
                {nextAiringEpisode && nextAiringEpisode.episode > 0 && (
                    <BadgeIndicator
                        episodeDifference={nextAiringEpisode.episode - entry.progress - 1}
                    />
                )}
                {isHovered && (
                    <>
                        <TopTitle
                            nextAiringEpisode={nextAiringEpisode}
                            progress={entry.progress}
                            totalEpisodes={episodes}
                        />
                        <BottomTitle
                            title={title.userPreferred}
                            hasNewNextAiringEpisode={!!nextAiringEpisode}
                            progress={entry.progress}
                            totalEpisodes={episodes}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default AnimeListEntry;
