import { DocumentArrowDownIcon, InboxArrowDownIcon } from '@heroicons/react/24/solid'
import { formatDateToLocal } from '../../lib/utils'
import { useEffect, useState } from 'react';
import { fetchRssData } from '../../lib/data';
import Spinner from '../ui/Spinner';

const TableBody = ({ provider, romaji, english }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Indicate data is loading
                const response = await fetchRssData(provider, romaji, english);
                setData(response.data); // Update data state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
                setData(null); // Set data to null on error
            } finally {
                setLoading(false); // Indicate data fetching is complete
            }
        };

        // Only fetch data if romaji or english is defined
        if (romaji || english) {
            fetchData();
        }
    }, [romaji, english, provider]);

    return (
        <tbody className="bg-white dark:bg-indigo-900 ">
            {loading ? (
                <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-sm">
                    <td colSpan="7" className="py-4 text-center"><Spinner /></td>
                </tr>
            ) : data && data.length > 0 ? (
                data.map((episode, idx) => (
                    <tr className="w-full border-b border-slate-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-sm " key={idx} >
                        <td className="relative overflow-hidden  py-3 pl-6 pr-3">
                            <a href={episode.guid[0]._} target="_blank" rel="noopener noreferrer">
                                {episode.title[0]}
                            </a>
                        </td>


                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className='flex justify-center gap-3'>

                                <a href={`magnet:?xt=urn:btih:${episode['nyaa:infoHash']}`} className="rounded-md border p-2 hover:bg-gray-100 dark:hover:bg-orange-600 dark:hover:text-slate-100">
                                    <InboxArrowDownIcon className="h-5 w-5" />
                                </a>

                                <a href={episode.link[0]} className="rounded-md border p-2 hover:bg-gray-100 dark:hover:bg-orange-600 dark:hover:text-slate-100">
                                    <DocumentArrowDownIcon className='h-5 w-5' />
                                </a>

                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">{episode['nyaa:size'][0]}</td>
                        <td className="whitespace-nowrap px-3 py-3">{formatDateToLocal(episode.pubDate)}</td>
                        <td className="whitespace-nowrap px-3 py-3 text-green-500">{episode['nyaa:seeders'][0]}</td>
                        <td className="whitespace-nowrap px-3 py-3 text-red-500">{episode['nyaa:leechers'][0]}</td>
                        <td className="whitespace-nowrap px-3 py-3">{episode['nyaa:downloads'][0]}</td>
                    </tr>
                ))
            ) : (
                <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-sm">
                    <td colSpan="7" className="py-4 text-center">No data found</td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody;
