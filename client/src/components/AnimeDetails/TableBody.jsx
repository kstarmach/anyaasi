import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { DocumentArrowDownIcon, InboxArrowDownIcon } from '@heroicons/react/24/solid'

function formatDateTime(inputDateString) {
    // Step 1: Parse the input date string into a Date object
    const inputDate = new Date(inputDateString);

    // Step 2: Format the Date object into the desired output format
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const hours = String(inputDate.getHours()).padStart(2, '0');
    const minutes = String(inputDate.getMinutes()).padStart(2, '0');

    // Create the desired output format
    const outputDateString = `${day}-${month}-${year} ${hours}:${minutes}`;

    return outputDateString;
}




const TableBody = ({ rssData }) => {


    return (
        <tbody>
            {rssData && rssData.length > 0 ? (
                rssData.map((episode, idx) => (
                    <tr key={idx}>
                        {/* <td className="py-2 px-4">{episode.episodeNumber}</td> */}
                        <td className="py-2 px-4 text-left">
                            <a href={episode.guid[0]._} target="_blank" rel="noopener noreferrer">
                                {episode.title[0]}
                            </a>
                        </td>
                        <td className="py-2 px-4 text-center">
                            {episode['nyaa:comments'][0] > 0 ? (
                                <div className="flex">
                                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                                    <p className="ml-1">{episode['nyaa:comments'][0]}</p>
                                </div>
                            ) : null}
                        </td>

                        <td className="py-2 px-4 flex gap-2 text-center">
                            <div>
                                <a href={`magnet:?xt=urn:btih:${episode['nyaa:infoHash']}`} className="text-blue-500 hover:underline">   <InboxArrowDownIcon className="h-5 w-5" /></a>
                            </div>
                            <div>
                                <a href={episode.link[0]} className="text-blue-500 hover:underline"><DocumentArrowDownIcon className='h-5 w-5' /></a>
                            </div>
                        </td>
                        <td className="py-2 px-4 text-center">{episode['nyaa:size'][0]}</td>
                        <td className="py-2 px-4 text-left">{formatDateTime(episode.pubDate)}</td>
                        <td className="py-2 px-4 text-green-500 text-center">{episode['nyaa:seeders'][0]}</td>
                        <td className="py-2 px-4 text-red-500 text-center">{episode['nyaa:leechers'][0]}</td>
                        <td className="py-2 px-4 text-center">{episode['nyaa:downloads'][0]}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="9">No data available</td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody;