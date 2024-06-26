import axios from 'axios';

export async function fetchRssData(provider, romaji, english) {
    try {
        const url = `/rss/${provider}?romaji=${romaji}&english=${english}`
        const response = await axios.get(encodeURI(url));
        return response;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch data.');
    }
}