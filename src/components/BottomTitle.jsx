import React from 'react';

function BottomTitle({ title }) {
    return (
        <div className="anime-details-overlay absolute bottom-0 left-0 w-full p-4 text-white backdrop-blur-sm rounded-b-xl">
            <h3>{title}</h3>
        </div>
    );
}

export default BottomTitle;
