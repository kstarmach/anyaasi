import React, { useState } from 'react';
const mockEpisodeData = [
    // ... previous mockEpisodeData
    {
        episodeNumber: 31,
        episodeTitle: "Episode 31 Title",
        commentsCount: 18,
        links: {
            magnetLink: "magnet:?...",
            downloadLink: "https://example.com/episode31.torrent",
        },
        size: "280 MB",
        date: "2023-09-01",
        seedCount: 75,
        leechCount: 8,
        downloads: 1200,
    },
    {
        episodeNumber: 32,
        episodeTitle: "Episode 32 Title",
        commentsCount: 22,
        links: {
            magnetLink: "magnet:?...",
            downloadLink: "https://example.com/episode32.torrent",
        },
        size: "310 MB",
        date: "2023-09-08",
        seedCount: 90,
        leechCount: 12,
        downloads: 1600,
    },
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
    // ... add more episodes
];



const ITEMS_PER_PAGE = 5;

const DownloadSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;


    const paginate = pageNumber => setCurrentPage(pageNumber);
    const currentItems = mockEpisodeData.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="bg-white shadow-sm rounded-md p-6 text-left">
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