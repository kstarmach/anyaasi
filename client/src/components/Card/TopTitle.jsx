import React from 'react';
import moment from 'moment';
import CountdownTimer from './CountdownTimer';

function TopTitle({ nextAiringEpisode, progress, totalEpisodes }) {
    if (!nextAiringEpisode) {
        return (
            <div className="countdown-overlay absolute top-0 left-0 p-4 text-white bg-black bg-opacity-60 rounded-t-xl w-full">
                <p>Progress: </p>
                <p> {progress} / {totalEpisodes}</p>
            </div>
        );
    }

    return (
        <div className="countdown-overlay absolute top-0 left-0 p-4 text-white bg-black bg-opacity-60 rounded-t-xl w-full">
            <CountdownTimer
                nextEpisodeTime={moment.unix(
                    nextAiringEpisode.timeUntilAiring + moment().unix()
                )}
                nextEpisodeNumber={nextAiringEpisode.episode}
            />
        </div>
    );
}

export default TopTitle;
