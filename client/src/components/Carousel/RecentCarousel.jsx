import React from 'react';
import Carousel from '.';


function RecentCarousel({ animeLists }) {

    const sortedEntries = animeLists
        .map(list => list)
        .filter(entry => entry.nextAiringEpisode) // Filter out entries with null nextAiringEpisode
        .sort((a, b) => {
            const airingA = a.nextAiringEpisode;
            const airingB = b.nextAiringEpisode;

            return airingB.timeUntilAiring - airingA.timeUntilAiring;
        })
        .filter(entry => entry.nextAiringEpisode.episode - 1 > entry.progress);

    return (
        <>
            <Carousel
                data={sortedEntries}
                title={"Recently Added"}
                height={250}
                width={460}
                carouselType="recent"
            />
        </>
    );
}

export default RecentCarousel;
