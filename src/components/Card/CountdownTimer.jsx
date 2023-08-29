import React, { useState, useEffect } from 'react';
import moment from 'moment';

function CountdownTimer({ nextEpisodeTime, nextEpisodeNumber }) {
    const [timeRemaining, setTimeRemaining] = useState(nextEpisodeTime.diff(moment(), 'seconds'));

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeRemaining = nextEpisodeTime.diff(moment(), 'seconds');
            setTimeRemaining(newTimeRemaining);

            if (newTimeRemaining <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const daysRemaining = Math.floor(timeRemaining / 86400);
    const hoursRemaining = Math.floor((timeRemaining % 86400) / 3600);
    const minutesRemaining = Math.floor((timeRemaining % 3600) / 60);

    const timeParts = [];
    if (daysRemaining > 0) timeParts.push(`${daysRemaining}d`);
    if (hoursRemaining > 0) timeParts.push(`${hoursRemaining}h`);
    if (minutesRemaining > 0) timeParts.push(`${minutesRemaining}m`);

    const timeString = timeParts.join(' ');

    return (
        <div>
            <p>Ep {nextEpisodeNumber}</p>
            <p>{timeString}</p>
        </div>
    );
}

export default CountdownTimer;
