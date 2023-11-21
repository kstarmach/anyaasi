import React, { useState } from 'react';
import Anilist from '../components/LoginForm/Anilist';
import MyAnimeList from '../components/LoginForm/MyAnimeList';

const Login = () => {
    return (
        <>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Select your account
            </h2>
            <div className='flex flex-wrap'>
                <div className='flex-1'></div>
                <Anilist />

                <MyAnimeList />
                <div className='flex-1'></div>
            </div>
        </>
    )
}

export default Login;