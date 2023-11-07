import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ title, provider }) => {
    const [rssData, setRssData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/fetchRss/${provider}?q=${title}+1080p`);
                if (response.status === 200) {

                    setRssData(response.data);
                }
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        fetchData();
    }, [provider]);

    return (
        <div className="bg-white shadow-sm rounded-r-lg rounded-b-lg p-8 ">

            <table className="w-full border-collapse table-auto">
                <TableHeader />
                <TableBody rssData={rssData} />
            </table>
        </div>
    )
}

export default Table;