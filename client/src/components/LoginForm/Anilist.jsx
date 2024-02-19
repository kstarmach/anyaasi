import React, { useState } from 'react';

import UserResult from "./UserResult"

const AnilistForm = ({ handleForm, setUsername }) => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm">
            <form className="space-y-6" onSubmit={handleForm}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>

                    <input
                        id="username"
                        name="username"
                        autoComplete='username'
                        min={3}
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

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
    )
}

const Anilist = () => {
    const [username, setUsername] = useState('');
    const handleForm = (event) => {
        event.preventDefault();
        setUsername(event.target[0].value);
    }

    return (
        <div className="flex-1 justify-center px-6 py-12 lg:px-8 mt-40">

            <div className="grow">
                <img
                    className="mx-auto h-16 w-auto grow"
                    src="AniList_logo.svg.png"
                    alt="Anilist logo"
                />
            </div>

            <AnilistForm
                setUsername={setUsername}
                handleForm={handleForm}
            />
            {username ?
                <UserResult
                    username={username}
                />
                : ''}
        </div>
    )
}

export default Anilist