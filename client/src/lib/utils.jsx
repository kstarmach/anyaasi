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