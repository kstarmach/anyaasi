import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_USER_DATA = gql`
  query ($name: String) {
    User(name: $name) {
        id
        name
        avatar {
          large
        }
      }
  }
`;

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const { loading, error, data } = useQuery(GET_USER_DATA, {
        variables: { name: username },
        skip: !username,
    });

    const handleForm = (event) => {
        event.preventDefault();
        setUsername(event.target[0].value);
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex">
                        <div className="grow">
                            <img
                                className="mx-auto h-16 w-auto grow"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/512px-AniList_logo.svg.png"
                                alt="Your Company"
                            />
                        </div>
                        <div className="grow-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-auto h-16 stroke-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>

                        </div>
                        <div className="grow mx-auto h-16 w-auto grow">

                            <img
                                className="mx-auto h-16 w-auto "
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
                                alt="Your Company"
                            />
                        </div>
                    </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Select your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm">
                    <form className="space-y-6" onSubmit={handleForm}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2 w-80">
                                <input
                                    id="username"
                                    name="username"
                                    min={3}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onChange={(e) => setUsername(e.target.value)}
                            >
                                Find
                            </button>
                        </div>
                    </form>
                </div>

                {username && (
                    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm space-y-6 ">
                        <div className='grid grid-cols-1  gap-6'>
                            <div className="">
                                {loading && <p>Loading...</p>}
                                {error && <p className="text-red-500">Error: {error.message}</p>}
                                {data && data.User ? (
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={data.User.avatar.large}
                                                alt="User Avatar"
                                            />
                                            <p className="text-lg font-semibold">{data.User.name}</p>
                                        </div>
                                        <img
                                            className="mx-auto h-10 w-auto "
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/512px-AniList_logo.svg.png"
                                            alt="Your Company"
                                        />
                                        <button
                                            type="button"
                                            // onClick={onClick}
                                            className="px-3 py-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                ) : (
                                    <p>No user found.</p>
                                )}
                            </div>
                            <div className="border-t border-gray-300"></div>

                            <div className="">
                                {loading && <p>Loading...</p>}
                                {error && <p className="text-red-500">Error: {error.message}</p>}
                                {data && data.User ? (
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={data.User.avatar.large}
                                                alt="User Avatar"
                                            />
                                            <p className="text-lg font-semibold">{data.User.name}</p>
                                        </div>
                                        <img
                                            className="mx-auto h-10 w-auto "
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
                                            alt="Your Company"
                                        />
                                        <button
                                            type="button"
                                            // onClick={onClick}
                                            className="px-3 py-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                ) : (
                                    <p>No user found.</p>
                                )}
                            </div>
                        </div>

                    </div>
                )}

            </div>


        </>
    )
}

export default LoginForm;