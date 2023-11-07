import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ProvidersTabs from './ProvidersTabs';
import { CheckCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'



const Table = ({ title }) => {
    const [selectedProvider, setSelectedProvider] = useState('Erai-raws');
    const [rssData, setRssData] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortColumn, setSortColumn] = useState(null); // Track the currently sorted column
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/fetchRss/${selectedProvider}?q=${title}+1080p`);
                if (response.status === 200) {
                    // Sort the data based on the selected sorting column and direction
                    let sortedData = [...response.data];
                    if (sortColumn) {
                        console.log(sortColumn);

                        sortedData = sortedData.sort((a, b) => {
                            const aDownloads = parseInt(a[sortColumn][0], 10);
                            const bDownloads = parseInt(b[sortColumn][0], 10);

                            return sortDirection === 'asc' ? aDownloads - bDownloads : bDownloads - aDownloads;
                        });

                        // sortedData = sortedData.sort((a, b) => {
                        //     const aValue = a[sortColumn];
                        //     const bValue = b[sortColumn];
                        //     if (aValue && bValue) {
                        //         return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                        //     }
                        //     return 0; // Leave the order unchanged if either value is undefined
                        // });
                    }

                    setRssData(sortedData);
                }
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        fetchData();
    }, [selectedProvider, title, sortDirection, sortColumn]);

    const handleSort = (columnKey) => {
        // Toggle the sort direction when the user clicks the sorting button
        setSortDirection((prevSortDirection) => (prevSortDirection === 'asc' ? 'desc' : 'asc'));
        setSortColumn(columnKey);
    };


    const columns = [
        { key: 'title', label: 'Title', sortable: false },
        { key: 'comments', label: '', sortable: false },
        { key: 'links', label: 'Links', sortable: false },
        { key: 'nyaa:size', label: 'Size', sortable: true },
        { key: 'pubDate', label: 'Date', sortable: true },
        { key: 'nyaa:seeders', label: <ArrowUpCircleIcon className="h-6 w-6" />, sortable: true },
        { key: 'nyaa:leechers', label: <ArrowDownCircleIcon className="h-6 w-6" />, sortable: true },
        { key: 'nyaa:downloads', label: <CheckCircleIcon className="h-6 w-6" />, sortable: true }

    ];

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
                    <TableHeader
                        columns={columns}
                        onSort={handleSort}
                        sortDirection={sortDirection}
                    />
                    <TableBody rssData={paginatedData} />
                </table>
            </div>
        </>
    )
}

export default Table;