import { useUserContext } from '../../UserContext'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UserAvatar } from '../ui/UserAvatar';
import { useNavigate } from "react-router-dom";
import Spinner from '../ui/Spinner';

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
                className="shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] bg-orange-600 hover:bg-orange-500 text-white  rounded-xl px-3 py-2 flex items-center justify-center  font-semibold "
            >
                Sign In
            </button>
        </div>
    )
}

const UserResult = ({ username }) => {
    const navigate = useNavigate();
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
            navigate('/')
        }
    };

    if (loading) {
        return (
            <Spinner text='Searching...' />
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