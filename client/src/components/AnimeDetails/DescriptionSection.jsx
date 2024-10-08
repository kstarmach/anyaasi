import { useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSuspenseQuery } from '@apollo/client';

import { GET_ANIME_DETAILS } from "../../queries";


const DescriptionSection = ({ animeId, onTitleReceived }) => {
    const { data } = useSuspenseQuery(GET_ANIME_DETAILS, {
        variables: { id: animeId },
    });

    useEffect(() => {
        if (data && data.Media && data.Media.title) {
            // Call the callback function with the title data
            onTitleReceived(data.Media.title);
        }
    }, [data, onTitleReceived]);

    const {
        title,
        coverImage,
        averageScore,
        description,
        genres,
        seasonYear
    } = data.Media;

    var tensDigit = Math.floor(averageScore / 10); // Get the tens digit
    var onesDigit = averageScore % 10; // Get the ones digit

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-wrap gap-8 dark:bg-indigo-900">
            <a href={`https://anilist.co/anime/${animeId}`} target="_blank" rel="noreferrer"><img src={coverImage.extraLarge} alt={title.romaji} className="rounded-xl h-96 w-72 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] " /></a>
            <div className="flex-1">
                <div className="flex items-center justify-center">
                    <div className="flex-grow">
                        <h1 className="text-3xl font-semibold mb-4">{title.romaji}</h1>
                        <div className="mb-4 flex flex-wrap gap-4">
                            {seasonYear && (
                                <span className="shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]  inline-flex items-center rounded-xl bg-gray-50  px-3 py-2 font-medium text-base text-gray-400 dark:bg-orange-600 dark:text-slate-100">
                                    {seasonYear}
                                </span>
                            )}
                            {genres.map((genre, idx) => (
                                <span className="shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]  rounded-xl bg-gray-50 p-3 font-medium text-gray-400 dark:bg-indigo-500 dark:text-slate-100" key={idx}>
                                    {genre}
                                </span>
                            ))}

                        </div>
                    </div>
                    <div className='shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] flex items-center text-white bg-sky-300 dark:bg-orange-600 rounded-full p-2'>
                        <StarIcon className="w-8 h-8 fill-yellow-300 mx-2" />
                        <h3 className="mr-2 text-lg font-bold">
                            {tensDigit},{onesDigit}
                        </h3>
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: description }} className="mt-4" />
            </div>
        </div>
    )
}

export default DescriptionSection;