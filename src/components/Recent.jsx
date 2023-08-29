import React from 'react';
import { useQuery } from '@apollo/client';
import { useUserContext } from '../UserContext';
import { GET_ANIME_LIST } from '../queries';
import Carousel from './Carousel';


function Recent() {
    const { user } = useUserContext();

    if (!user) {
        return <p>You need to log in</p>;
    }

    const { loading, error, data } = useQuery(GET_ANIME_LIST, {
        variables: { userId: user.id },
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const animeListCollection = data.MediaListCollection;
    const animeLists = animeListCollection.lists;

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
            />
        </>
    );
}

export default Recent;
