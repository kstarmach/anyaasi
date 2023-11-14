import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '../queries'

import Header from '../components/LoginForm/Header';
import UserResult from '../components/LoginForm/UserResult';
import LoginForm from '../components/LoginForm';



const Login = () => {

    const [username, setUsername] = useState('');
    const handleForm = (event) => {
        event.preventDefault();
        setUsername(event.target[0].value);
    }

    const { loading, error, data } = useQuery(GET_USER_DATA, {
        variables: { name: username },
        skip: !username,
    });



    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-40">
                <Header />

                <LoginForm setUsername={setUsername} handleForm={handleForm} />

                <UserResult
                    data={data}
                    loading={loading}
                    error={error}
                />

            </div>


        </>
    )
}

export default Login;