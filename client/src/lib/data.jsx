import axios from 'axios';

export async function fetchRssData(selectedProvider, title) {
    try {

        const response = await axios.get(`/rss/${selectedProvider}?q=${title}+1080p`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch data.');
    }
}