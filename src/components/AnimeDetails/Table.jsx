import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ProvidersTabs from './ProvidersTabs';


const Table = ({ title }) => {
    const [selectedProvider, setSelectedProvider] = useState('Erai-raws');
    const [rssData, setRssData] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/fetchRss/${selectedProvider}?q=${title}+1080p`);
                if (response.status === 200) {
                    const sortedData = [...response.data]; // Copy data for sorting

                    // Handle sorting based on the number of downloads
                    sortedData.sort((a, b) => {
                        const aDownloads = parseInt(a['nyaa:downloads'][0], 10);
                        const bDownloads = parseInt(b['nyaa:downloads'][0], 10);

                        return sortDirection === 'asc' ? aDownloads - bDownloads : bDownloads - aDownloads;
                    });

                    setRssData(sortedData);
                }
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        fetchData();
    }, [selectedProvider, title, sortDirection]);

    const handleSort = () => {
        // Toggle the sort direction when the user clicks the sorting button
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = rssData.slice(startIndex, endIndex);

    return (
        <>
            <ProvidersTabs
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={Math.ceil(rssData.length / itemsPerPage)}
            />
            <div className="bg-white shadow-sm rounded-r-lg rounded-b-lg p-8 ">
                <table className="w-full border-collapse table-auto">
                    <TableHeader onSort={handleSort} sortDirection={sortDirection} />
                    <TableBody rssData={paginatedData} />
                </table>
            </div>
        </>
    )
}

export default Table;