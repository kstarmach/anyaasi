import React from 'react';
import Carousel from '.';


function RecentCarousel({ animeLists }) {

    // Sort entries by progress in ascending order
    const sortedEntries = animeLists
        .flatMap(list => list.entries)
        .filter(entry => entry.media.nextAiringEpisode) // Filter out entries with null nextAiringEpisode
        .sort((a, b) => {
            const airingA = a.media.nextAiringEpisode;
            const airingB = b.media.nextAiringEpisode;

            return airingB.timeUntilAiring - airingA.timeUntilAiring;
        });


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
