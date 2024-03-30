import { DocumentArrowDownIcon, InboxArrowDownIcon } from '@heroicons/react/24/solid'
import { formatDateToLocal } from '../../lib/utils'





const TableBody = ({ rssData }) => {


    return (
        <tbody className="bg-white ">
            {rssData && rssData.length > 0 ? (
                rssData.map((episode, idx) => (
                    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-sm" key={idx}>
                        {/* <td className="py-2 px-4">{episode.episodeNumber}</td> */}
                        <td className="relative overflow-hidden  py-3 pl-6 pr-3">
                            <a href={episode.guid[0]._} target="_blank" rel="noopener noreferrer">
                                {episode.title[0]}
                            </a>
                        </td>
                        {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            {episode['nyaa:comments'][0] > 0 ? (
                                <div className="flex">
                                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                                    <p className="ml-1">{episode['nyaa:comments'][0]}</p>
                                </div>
                            ) : null}
                        </td> */}

                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className='flex justify-center gap-3'>

                                <a href={`magnet:?xt=urn:btih:${episode['nyaa:infoHash']}`} className="rounded-md border p-2 hover:bg-gray-100">
                                    <InboxArrowDownIcon className="h-5 w-5" />
                                </a>

                                <a href={episode.link[0]} className="rounded-md border p-2 hover:bg-gray-100">
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
                <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg text-sm" >

                </tr>
            )}
        </tbody>
    )
}

export default TableBody;