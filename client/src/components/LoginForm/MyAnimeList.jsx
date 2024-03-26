import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../UserContext';


const MyAnimeListForm = ({ redirectUrl }) => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm">
            <div className="space-y-6"  >


                <div>
                    <a
                        href={redirectUrl}
                        //target='blank'
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
    const { setUser } = useUserContext();
    const [loginUrl, setLoginUrl] = useState(null);

    // Initialize state for access token
    // const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const getAccessTokenFromUrl = async () => {
            const { access_token } = Object.fromEntries(new URLSearchParams(window.location.search));

            if (access_token) {

                try {
                    const { data } = await axios.get('/api/v2/users/@me', {
                        headers: { 'Authorization': `Bearer ${access_token}` }
                    });

                    const userData = {
                        id: data.id,
                        name: data.name,
                        avatar: data.picture,
                        provider: 'myanimelist',
                        accessToken: access_token
                    };

                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        getAccessTokenFromUrl();

        // Cleanup code to remove parameters from the current URL
        const removeParamsFromUrl = () => {
            const urlWithoutParams = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, urlWithoutParams);
        };

        return () => {
            removeParamsFromUrl();
            // Additional cleanup code if needed
        };
    }, [setUser]);


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