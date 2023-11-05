import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DownloadSection = ({ title }) => {
    const providers = ['Erai-raws', 'SubsPlease']
    const [selectedProvider, setSelectedProvider] = useState(providers[0]);
    const [rssData, setRssData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/fetchRss/${selectedProvider}?q=${title}+1080p`);
                if (response.status === 200) {

                    setRssData(response.data);
                }
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        fetchData();
    }, [selectedProvider]);


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
                    <button className='bg-white color-black rounded-xl p-2 flex items-center'>
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

                    <button className='bg-white color-black rounded-xl p-2 flex items-center'>
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
                            {/* <th className="py-2 px-4 text-left">Episode</th> */}
                            <th className="py-2 px-4 text-left">Title</th>
                            <th className="py-2 px-4 text-left">Comments Count</th>
                            <th className="py-2 px-4 text-left">Links</th>
                            <th className="py-2 px-4 text-left">Size</th>
                            <th className="py-2 px-4 text-left">Date</th>
                            <th className="py-2 px-4 text-left">S</th>
                            <th className="py-2 px-4 text-left">L</th>
                            <th className="py-2 px-4 text-left">D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rssData && rssData.length > 0 ? (
                            rssData.map((episode, idx) => (
                                <tr key={idx}>
                                    {/* <td className="py-2 px-4">{episode.episodeNumber}</td> */}
                                    <td className="py-2 px-4">
                                        <a href={episode.guid[0]._} target="_blank" rel="noopener noreferrer">
                                            {episode.title[0]}
                                        </a>
                                    </td>
                                    <td className="py-2 px-4">{episode['nyaa:comments'][0]}</td>
                                    <td className="py-2 px-4 flex gap-2">
                                        <div>
                                            <a href={`magnet:?xt=urn:btih:${episode['nyaa:infoHash']}`} className="text-blue-500 hover:underline">M</a>
                                        </div>
                                        <div>
                                            <a href={episode.link[0]} className="text-blue-500 hover:underline">D</a>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4">{episode['nyaa:size'][0]}</td>
                                    <td className="py-2 px-4">{episode.pubDate}</td>
                                    <td className="py-2 px-4">{episode['nyaa:seeders'][0]}</td>
                                    <td className="py-2 px-4">{episode['nyaa:leechers'][0]}</td>
                                    <td className="py-2 px-4">{episode['nyaa:downloads'][0]}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DownloadSection;

