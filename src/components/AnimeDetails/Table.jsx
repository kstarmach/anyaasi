import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ProvidersTabs from './ProvidersTabs';


const Table = ({ title }) => {
    const [selectedProvider, setSelectedProvider] = useState('Erai-raws');
    const [rssData, setRssData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = Math.ceil(rssData.length / itemsPerPage);

    const paginateData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return rssData.slice(startIndex, endIndex);
    };

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
        <>
            <ProvidersTabs
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <div className="bg-white shadow-sm rounded-r-lg rounded-b-lg p-8 ">
                <table className="w-full border-collapse table-auto">
                    <TableHeader />
                    <TableBody rssData={paginateData()} />
                </table>
            </div>
        </>
    )
}

export default Table;