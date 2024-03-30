import { useState, useEffect } from 'react';
import axios from 'axios';

import TableBody from './TableBody';
import ProvidersTabs from './ProvidersTabs';
import { CheckCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'


const Table = ({ title }) => {
    const [selectedProvider, setSelectedProvider] = useState('Erai-raws');
    const [rssData, setRssData] = useState([]);
    const [sortDirections, setSortDirections] = useState({ pubDate: 'desc' });


    const [sortColumn, setSortColumn] = useState(null); // Track the currently sorted column
    const [currentPage, setCurrentPage] = useState(1);
    //const [itemsPerPage, setItemsPerPage] = useState(10);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/rss/${selectedProvider}?q=${title}+1080p`);
                if (response.status === 200) {
                    // Sort the data based on the selected sorting column and direction
                    let sortedData = [...response.data];
                    if (sortColumn) {
                        if (sortColumn === 'title') {
                            // Sort by title without localeCompare
                            sortedData = sortedData.sort((a, b) => {
                                const aValue = a[sortColumn];
                                const bValue = b[sortColumn];

                                if (typeof aValue === 'string' && typeof bValue === 'string') {
                                    return sortDirections[sortColumn] === 'asc'
                                        ? aValue.localeCompare(bValue)
                                        : bValue.localeCompare(aValue);
                                } else {
                                    // Handle cases where the values are not strings
                                    if (sortDirections[sortColumn] === 'asc') {
                                        return aValue < bValue ? -1 : 1;
                                    } else {
                                        return aValue < bValue ? 1 : -1;
                                    }
                                }
                            });
                        } else if (sortColumn === 'pubDate') {
                            sortedData = sortedData.sort((a, b) => {
                                const aValue = new Date(a[sortColumn]);
                                const bValue = new Date(b[sortColumn]);

                                if (!isNaN(aValue) && !isNaN(bValue)) {
                                    return sortDirections[sortColumn] === 'asc' ? aValue - bValue : bValue - aValue;
                                } else {
                                    // Handle other cases or decide how to sort invalid dates
                                    return 0;
                                }
                            });
                        } else {
                            sortedData = sortedData.sort((a, b) => {
                                const aDownloads = parseInt(a[sortColumn][0], 10);
                                const bDownloads = parseInt(b[sortColumn][0], 10);

                                return sortDirections[sortColumn] === 'asc' ? aDownloads - bDownloads : bDownloads - aDownloads;
                            });
                        }
                    }

                    setRssData(sortedData);
                }
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        fetchData();
    }, [selectedProvider, title, sortDirections, sortColumn]);  // Include sortDirection and sortColumn in the dependencies


    // const handleSort = (columnKey) => {
    //     // Toggle the sort direction for the clicked column
    //     setSortDirections((prevSortDirections) => ({
    //         [columnKey]: prevSortDirections[columnKey] === 'asc' ? 'desc' : 'asc',
    //     }));

    //     setSortColumn(columnKey);
    // };


    // const columns = [
    //     { key: 'title', label: <span className='mr-auto'>Title</span>, sortable: true },
    //     { key: 'nyaa:comments', label: <ChatBubbleLeftRightIcon className="h-6 w-6" />, sortable: true },
    //     { key: 'links', label: 'Links', sortable: false },
    //     { key: 'nyaa:size', label: <span className='mr-auto'>Size</span>, sortable: true },
    //     { key: 'pubDate', label: <span className='mr-auto'>Date</span>, sortable: true },
    //     { key: 'nyaa:seeders', label: <ArrowUpCircleIcon className="h-6 w-6 m-auto" />, sortable: true },
    //     { key: 'nyaa:leechers', label: <ArrowDownCircleIcon className="h-6 w-6 m-auto" />, sortable: true },
    //     { key: 'nyaa:downloads', label: <CheckCircleIcon className="h-6 w-6 m-auto" />, sortable: true }

    // ];

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
            <div className=" min-w-full align-middle rounded-xl">
                <div className="rounded-xl bg-gray-100  md:pt-0">

                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium text-center">
                                    Links
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Size
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    <ArrowUpCircleIcon className="h-5 w-5 " />
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    <ArrowDownCircleIcon className="h-5 w-5 " />
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    <CheckCircleIcon className="h-5 w-5 " />
                                </th>
                            </tr>
                        </thead>
                        <TableBody rssData={paginatedData} />
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table;