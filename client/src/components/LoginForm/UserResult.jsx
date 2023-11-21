import { useUserContext } from '../../UserContext'
import axios from 'axios';
import { useState, useEffect } from 'react';

const UserData = ({ data, handleSignIn }) => {
    return (
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm space-y-6 ">

            <div className='grid grid-cols-1  gap-6'>

                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <img
                            className="h-8 w-8 rounded-full"
                            src={data.avatar}
                            alt="User Avatar"
                        />
                        <p className="text-lg font-semibold">{data.name}</p>
                    </div>


                    <img
                        className="mx-auto h-10 w-auto "
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/512px-AniList_logo.svg.png"
                        alt="Your Company"
                    />


                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="px-3 py-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign In
                    </button>
                </div>

            </div>
        </div >
    )
}

const UserResult = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const { setUser } = useUserContext();

    useEffect(() => {
        setUserData(null);
        const anilistData = async () => {
            try {
                const response = await axios.get(`/anilist/${username}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);

                // Set user data to null in case of an error
                setUserData(null);
            }
        };

        // Fetch data when the component mounts or when the username changes
        anilistData();
    }, [username]);

    const handleSignIn = () => {
        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        }
    };

    if (userData) {
        return (
            <>
                <UserData data={userData} handleSignIn={handleSignIn} />
            </>
        );
    } else {
        // Display 'Not Found' when userData is null (i.e., an error occurred)
        return (
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm space-y-6 ">
                <p className="text-lg font-semibold">Not Found</p>
            </div >
        )
    }
};


export default UserResult;