import React, { useState } from 'react';
import { mockEpisodeData } from './mockData';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 5;

const DownloadSection = () => {
    const [selectedProvider, setSelectedProvider] = useState(mockEpisodeData[0].provider);


    const providers = mockEpisodeData.map(item => item.provider);

    // Filter episodes based on the selected provider
    const selectedProviderData = mockEpisodeData.find(item => item.provider === selectedProvider);
    const currentItems = selectedProviderData ? selectedProviderData.episodes: [];

    return (
        <div className='mb-8'>
            {/* Tabs for Providers */}
            <div className="flex  items-center justify-center">
                <div className='flex-grow'>
                    {providers.map(provider => (
                        <button
                            key={provider}
                            className={`font-medium text-base px-4 py-2 rounded-t-xl  ${selectedProvider === provider ? 'bg-white   text-indigo-600' : 'bg-gray-100  text-gray-400'}`}
                            onClick={() => setSelectedProvider(provider)}
                        >
                            {provider}
                        </button>
                    ))}
                </div>
                <div className='flex gap-4 items-center'>
                    <button

                        className='bg-white color-black rounded-xl p-2 flex items-center'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button

                        className='bg-white color-black rounded-xl p-2 flex items-center'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-r-lg rounded-b-lg p-8 ">

                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr className="bg-gray-100 rounded-md">
                            <th className="py-2 px-4 text-left">Episode</th>
                            <th className="py-2 px-4 text-left">Title</th>
                            {/* <th className="py-2 px-4 text-left">Comments Count</th> */}
                            <th className="py-2 px-4 text-left">Links</th>
                            <th className="py-2 px-4 text-left">Size</th>
                            <th className="py-2 px-4 text-left">Date</th>
                            <th className="py-2 px-4 text-left">S</th>
                            <th className="py-2 px-4 text-left">L</th>
                            <th className="py-2 px-4 text-left">D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((episode) => (
                            <tr key={episode.episodeNumber}>
                                <td className="py-2 px-4">{episode.episodeNumber}</td>
                                <td className="py-2 px-4"><Link to="#">{episode.episodeTitle}</Link></td>
                                {/* <td className="py-2 px-4">{episode.commentsCount}</td> */}
                                <td className="py-2 px-4 flex gap-2">
                                    <div>
                                        <a href={episode.links.magnetLink} className="text-blue-500 hover:underline">M</a>
                                    </div>
                                    <div>
                                        <a href={episode.links.downloadLink} className="text-blue-500 hover:underline">D</a>
                                    </div>
                                </td>
                                <td className="py-2 px-4">{episode.size}</td>
                                <td className="py-2 px-4">{episode.date}</td>
                                <td className="py-2 px-4">{episode.seedCount}</td>
                                <td className="py-2 px-4">{episode.leechCount}</td>
                                <td className="py-2 px-4">{episode.downloads}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DownloadSection;