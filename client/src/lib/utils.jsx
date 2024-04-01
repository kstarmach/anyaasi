export const formatDateToLocal = (dateStr, locale = 'en-GB') => {
    const date = new Date(dateStr);
    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
};

export function formatDateTime(inputDateString) {
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

export const generatePagination = (currentPage, totalPages) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};



// const [rssData, setRssData] = useState([]);
// const [sortDirections, setSortDirections] = useState({ pubDate: 'desc' });


// const [sortColumn, setSortColumn] = useState(null); // Track the currently sorted column
// const [currentPage, setCurrentPage] = useState(1);
// //const [itemsPerPage, setItemsPerPage] = useState(10);
// const itemsPerPage = 10;

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`/rss/${selectedProvider}?q=${title}+1080p`);
//             if (response.status === 200) {
//                 // Sort the data based on the selected sorting column and direction
//                 let sortedData = [...response.data];
//                 if (sortColumn) {
//                     if (sortColumn === 'title') {
//                         // Sort by title without localeCompare
//                         sortedData = sortedData.sort((a, b) => {
//                             const aValue = a[sortColumn];
//                             const bValue = b[sortColumn];

//                             if (typeof aValue === 'string' && typeof bValue === 'string') {
//                                 return sortDirections[sortColumn] === 'asc'
//                                     ? aValue.localeCompare(bValue)
//                                     : bValue.localeCompare(aValue);
//                             } else {
//                                 // Handle cases where the values are not strings
//                                 if (sortDirections[sortColumn] === 'asc') {
//                                     return aValue < bValue ? -1 : 1;
//                                 } else {
//                                     return aValue < bValue ? 1 : -1;
//                                 }
//                             }
//                         });
//                     } else if (sortColumn === 'pubDate') {
//                         sortedData = sortedData.sort((a, b) => {
//                             const aValue = new Date(a[sortColumn]);
//                             const bValue = new Date(b[sortColumn]);

//                             if (!isNaN(aValue) && !isNaN(bValue)) {
//                                 return sortDirections[sortColumn] === 'asc' ? aValue - bValue : bValue - aValue;
//                             } else {
//                                 // Handle other cases or decide how to sort invalid dates
//                                 return 0;
//                             }
//                         });
//                     } else {
//                         sortedData = sortedData.sort((a, b) => {
//                             const aDownloads = parseInt(a[sortColumn][0], 10);
//                             const bDownloads = parseInt(b[sortColumn][0], 10);

//                             return sortDirections[sortColumn] === 'asc' ? aDownloads - bDownloads : bDownloads - aDownloads;
//                         });
//                     }
//                 }

//                 setRssData(sortedData);
//             }
//         } catch (error) {
//             console.error('Error fetching RSS data:', error);
//         }
//     };

//     fetchData();
// }, [selectedProvider, title, sortDirections, sortColumn]);  // Include sortDirection and sortColumn in the dependencies


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

// const startIndex = (currentPage - 1) * itemsPerPage;
// const endIndex = startIndex + itemsPerPage;
// const paginatedData = rssData.slice(startIndex, endIndex);

// useEffect(() => {
//     if (title !== null)
//         console.log(title);

// }, [title]);