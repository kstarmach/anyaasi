import React, { useState } from 'react';
const mockEpisodeData = [
    {
        provider: "Erai -raws",
        episodes: [
            // ... previous episodes
            {
                episodeNumber: 35,
                episodeTitle: "Episode 35 Title",
                commentsCount: 28,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode35.torrent",
                },
                size: "290 MB",
                date: "2023-09-29",
                seedCount: 70,
                leechCount: 11,
                downloads: 1300,
            },
            {
                episodeNumber: 36,
                episodeTitle: "Episode 36 Title",
                commentsCount: 20,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode36.torrent",
                },
                size: "300 MB",
                date: "2023-10-06",
                seedCount: 85,
                leechCount: 9,
                downloads: 1500,
            },
        ]
    },
    {
        provider: "Anime Time",
        episodes: [
            // ... previous episodes
            {
                episodeNumber: 33,
                episodeTitle: "Episode 33 Title",
                commentsCount: 30,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode33.torrent",
                },
                size: "290 MB",
                date: "2023-09-15",
                seedCount: 80,
                leechCount: 14,
                downloads: 1400,
            },
            {
                episodeNumber: 34,
                episodeTitle: "Episode 34 Title",
                commentsCount: 25,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode34.torrent",
                },
                size: "270 MB",
                date: "2023-09-22",
                seedCount: 70,
                leechCount: 10,
                downloads: 1100,
            },
        ]
    },
    {
        provider: "SubsPlease",
        episodes: [
            // ... previous episodes
            {
                episodeNumber: 37,
                episodeTitle: "Episode 37 Title",
                commentsCount: 26,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode37.torrent",
                },
                size: "280 MB",
                date: "2023-10-13",
                seedCount: 75,
                leechCount: 12,
                downloads: 1200,
            },
            {
                episodeNumber: 38,
                episodeTitle: "Episode 38 Title",
                commentsCount: 19,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode38.torrent",
                },
                size: "290 MB",
                date: "2023-10-20",
                seedCount: 85,
                leechCount: 11,
                downloads: 1300,
            },
        ]
    },
    {
        provider: "ToonsHub",
        episodes: [
            // ... previous episodes
            {
                episodeNumber: 35,
                episodeTitle: "Episode 35 Title",
                commentsCount: 22,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode35.torrent",
                },
                size: "260 MB",
                date: "2023-09-29",
                seedCount: 65,
                leechCount: 8,
                downloads: 1000,
            },
            {
                episodeNumber: 36,
                episodeTitle: "Episode 36 Title",
                commentsCount: 18,
                links: {
                    magnetLink: "magnet:?...",
                    downloadLink: "https://example.com/episode36.torrent",
                },
                size: "270 MB",
                date: "2023-10-06",
                seedCount: 75,
                leechCount: 9,
                downloads: 1100,
            },
        ]
    },
    // ... add more providers and episodes
];



const ITEMS_PER_PAGE = 5;

const DownloadSection = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProvider, setSelectedProvider] = useState(mockEpisodeData[0].provider);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const providers = mockEpisodeData.map(item => item.provider);

    // Filter episodes based on the selected provider
    const selectedProviderData = mockEpisodeData.find(item => item.provider === selectedProvider);
    const currentItems = selectedProviderData ? selectedProviderData.episodes.slice(indexOfFirstItem, indexOfLastItem) : [];

    return (
        <div className="bg-white shadow-sm rounded-md p-6 text-left">
            {/* Tabs for Providers */}
            <div className="flex space-x-4 mb-4">
                {providers.map(provider => (
                    <button
                        key={provider}
                        className={`px-3 py-2 rounded-md  ${selectedProvider === provider ? 'bg-indigo-600   text-white' : 'bg-gray-300  text-gray-600'}`}
                        onClick={() => setSelectedProvider(provider)}
                    >
                        {provider}
                    </button>
                ))}
            </div>

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
                            <td className="py-2 px-4">{episode.episodeTitle}</td>
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
            {/* Pagination */}
            {mockEpisodeData.length > ITEMS_PER_PAGE && (
                <div className="mt-4 flex items-center justify-center">
                    {Array.from({ length: Math.ceil(mockEpisodeData.length / ITEMS_PER_PAGE) }).map((_, index) => (
                        <button
                            key={index}
                            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
                                }`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DownloadSection;