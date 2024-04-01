export function recentlyAddedFilter(animeList) {
    return animeList
        .map(list => list)
        .filter(entry => entry.nextAiringEpisode) // Filter out entries with null nextAiringEpisode
        .sort((a, b) => {
            const airingA = a.nextAiringEpisode;
            const airingB = b.nextAiringEpisode;

            return airingB.timeUntilAiring - airingA.timeUntilAiring;
        })
        .filter(entry => entry.nextAiringEpisode.episode - 1 > entry.progress);
}

export function currentWatchingFilter(animeList) {
    return animeList.map(a => a).sort((a, b) => b.progress - a.progress);
}

export const extractAnimeList = (data) => {
    const animeList = [];

    for (let i = 0; i < data.MediaListCollection.lists[0].entries.length; i++) {
        const newObj = {
            ...data.MediaListCollection.lists[0].entries[i].media,
            progress: data.MediaListCollection.lists[0].entries[i].progress,
        };
        animeList.push(newObj);
    }

    return animeList;
};