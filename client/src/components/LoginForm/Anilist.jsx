import { useState } from 'react';

import UserResult from "./UserResult";

const AnilistForm = ({ handleForm, handleInputChange }) => {
    return (
        <form className="flex flex-col gap-4 dark:text-slate-200" onSubmit={handleForm}>
            <input
                id="username"
                name="username"
                autoComplete='username'
                placeholder='Anilist.co username...'
                required
                className="flex items-center bg-white rounded-full p-3 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] dark:bg-indigo-300 dark:placeholder:text-slate-200"
                onChange={handleInputChange}
            />
        </form>
    );
};

const Anilist = () => {
    const [username, setUsername] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(0);

    const handleForm = (event) => {
        event.preventDefault();
        setUsername(event.target.username.value);
    };

    const handleInputChange = (event) => {
        clearTimeout(typingTimeout);
        const inputUsername = event.target.value;
        setTypingTimeout(setTimeout(() => setUsername(inputUsername), 700));
    };

    return (
        <div className="flex flex-col gap-10">
            <img
                className="mx-auto h-20 w-auto grow rounded-xl shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]  bg-indigo-900"
                src="AniList_Dark.svg"
                alt="Anilist logo"
            />
            <AnilistForm handleForm={handleForm} handleInputChange={handleInputChange} />
            {username && <UserResult username={username} />}
        </div>
    );
};

export default Anilist;
