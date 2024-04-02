import { useState } from 'react';

import UserResult from "./UserResult";

const AnilistForm = ({ handleForm }) => {
    return (

        <form className="flex flex-col gap-4" onSubmit={handleForm}>
            <input
                id="username"
                name="username"
                autoComplete='username'
                min={3}
                placeholder='Anilist.co username...'
                required
                className="flex items-center bg-white rounded-full p-3 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]"
            />
        </form>

    )
}

const Anilist = () => {
    const [username, setUsername] = useState('');
    const handleForm = (event) => {
        event.preventDefault();
        setUsername(event.target[0].value);
    }

    return (
        <div className="flex flex-col gap-10">


            <img
                className="mx-auto h-20 w-auto grow rounded-xl shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]"
                src="AniList_logo.svg.png"
                alt="Anilist logo"
            />


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