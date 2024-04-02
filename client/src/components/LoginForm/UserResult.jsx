import { useUserContext } from '../../UserContext'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UserAvatar } from '../ui/UserAvatar';

const UserData = ({ data, handleSignIn }) => {
    return (
        <div className='flex flex-wrap justify-between'>
            <div className="flex items-center space-x-4">
                <UserAvatar avatar={data.avatar} />
                <p className="text-lg font-semibold">{data.name}</p>
            </div>

            <button
                type="button"
                onClick={handleSignIn}
                className="px-3 py-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign In
            </button>
        </div>
    )
}

const UserResult = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setUser } = useUserContext();

    useEffect(() => {
        setUserData(null);
        setLoading(true); // Set loading to true when data fetching starts

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/anilist/${username}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setUserData(null);
            } finally {
                setLoading(false); // Set loading to false once data fetching is done
            }
        };

        const timeoutId = setTimeout(() => {
            setLoading(false); // Set loading to false if data fetching takes more than 5 seconds
        }, 5000); // 5000 milliseconds = 5 seconds

        fetchUserData();

        return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout

    }, [username]);

    const handleSignIn = () => {
        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-lg font-semibold">Searching...</p>
            </div>
        );
    } else if (userData) {
        return (
            <UserData data={userData} handleSignIn={handleSignIn} />
        );
    } else {
        return (
            <p className="text-lg font-semibold">Not Found</p>
        );
    }
};




export default UserResult;