import React from "react";

const Header = ({ title, genres, seasonYear, averageScore }) => {
    var tensDigit = Math.floor(averageScore / 10); // Get the tens digit
    var onesDigit = averageScore % 10; // Get the ones digit

    return (
        <div className="flex items-center justify-center"> {/* Updated line */}
            <div className="flex-grow">
                <h1 className="text-3xl font-semibold mb-4">{title}</h1>
                <div className="mb-4">
                    {seasonYear && (
                        <span className="inline-flex items-center rounded-xl bg-gray-50 px-3 py-2 font-medium text-base text-gray-400 mr-3">
                            {seasonYear}
                        </span>
                    )}
                    {genres.map((genre, idx) => (
                        <span className="inline-flex items-center rounded-xl bg-gray-50 px-3 py-2 font-medium text-base text-gray-400 mr-3" key={idx}>
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex items-center text-white bg-blue-700 rounded-xl p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className='fill-yellow-400 mx-2'>
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <h3 className="mr-2 text-lg">
                    {tensDigit},{onesDigit}
                </h3>
            </div>
        </div>
    )
}

const DescriptionSection = ({ description, coverImage, title, genres, seasonYear, averageScore }) => {

    return (
        <div className="bg-white shadow-sm rounded-xl p-8 mb-8 flex gap-8">
            <img src={coverImage} alt={title} className="rounded-xl h-96 w-auto" />
            <div className="flex-1">
                <Header
                    title={title}
                    seasonYear={seasonYear}
                    genres={genres}
                    averageScore={averageScore}
                />

                <div dangerouslySetInnerHTML={{ __html: description }} className="mt-4" />
            </div>
        </div>
    )
}

export default DescriptionSection;