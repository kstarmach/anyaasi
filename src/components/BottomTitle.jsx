import React from 'react';

function BottomTitle({ title, averageScore, genres }) {
    var tensDigit = Math.floor(averageScore / 10); // Get the tens digit
    var onesDigit = averageScore % 10; // Get the ones digit
    return (
        <div className="anime-details-overlay absolute bottom-0 left-0 w-full p-4 text-white backdrop-blur-md rounded-b-xl font-semibold ">
            <div className='flex'>
                <h3 className='flex-grow'>{title}</h3>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" class='fill-yellow-400 mt-1 mr-2'>
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <h3>
                        {tensDigit},{onesDigit}
                    </h3>
                </div>
            </div>
            <div className='flex font-normal text-sm'>
                {genres.map((genre, idx) => (
                    <React.Fragment key={idx}>
                        <p>{genre}</p>
                        {idx !== genres.length - 1 && <span>,&nbsp;</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

}

export default BottomTitle;
