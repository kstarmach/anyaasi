import axios from 'axios';
import { useEffect, useState } from 'react';

const MyAnimeListForm = ({ handleLogin, redirectUrl }) => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm">
            <div className="space-y-6"  >


                <div>
                    <a
                        href={redirectUrl}
                        target='blank'
                        className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    )
}

const MyAnimeList = () => {
    const [loginUrl, setLoginUrl] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('handleLogin');
    }

    useEffect(() => {
        setLoginUrl(null);
        const loginUrl = async () => {
            try {
                const response = await axios.get('/myanimelist/login')
                setLoginUrl(response.data.authorizationUrl);
            } catch (error) {
                console.error('Error fetching data:', error.message);

                // Set user data to null in case of an error
                setLoginUrl(null);
            }
        };

        // Fetch data when the component mounts or when the username changes
        loginUrl();
    }, []);

    if (loginUrl) {
        return (
            <div className="flex-1 px-6 py-12 lg:px-8 mt-40">

                <div className="grow mx-auto h-16 w-auto grow">

                    <img
                        className="mx-auto h-16 w-auto "
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
                        alt="Your Company"
                    />
                </div>

                <MyAnimeListForm
                    redirectUrl={loginUrl}
                    handleLogin={handleLogin}
                />

            </div>
        )
    }
    return '';

}

export default MyAnimeList;