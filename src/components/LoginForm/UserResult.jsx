import { useUserContext } from '../../UserContext'
import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '../../queries'

const UserData = ({ data, type, handleSignIn }) => {
    return (
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm space-y-6 ">

            <div className='grid grid-cols-1  gap-6'>

                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <img
                            className="h-8 w-8 rounded-full"
                            src={data.User.avatar.large}
                            alt="User Avatar"
                        />
                        <p className="text-lg font-semibold">{data.User.name}</p>
                    </div>

                    {type === 'mal' ?
                        <img
                            className="mx-auto h-10 w-auto "
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
                            alt="Your Company"
                        />
                        :
                        <img
                            className="mx-auto h-10 w-auto "
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/512px-AniList_logo.svg.png"
                            alt="Your Company"
                        />
                    }

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
    const { setUser } = useUserContext();
    const { loading, error, data: anilistData } = useQuery(GET_USER_DATA, {
        variables: { name: username },
        skip: !username,
    });

    

    const handleSignIn = () => {
        setUser(anilistData.User);
        localStorage.setItem('user', JSON.stringify(anilistData.User));

    }

    if (anilistData) {
        return (
            <>

                <UserData
                    type={'anilist'}
                    data={anilistData}
                    handleSignIn={handleSignIn}
                />

                <UserData
                    type={'mal'}
                    data={anilistData}
                    handleSignIn={handleSignIn}
                />
            </>



        )
    }

    return '';
}

export default UserResult;