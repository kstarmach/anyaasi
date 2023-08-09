'use client';

import { useState } from "react";
import { Card, Title } from "@tremor/react"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { Menu } from "@headlessui/react";
import Image from 'next/image';
import Router, { useRouter } from 'next/navigation';

interface User {
    avatar: { medium: string };
    // other properties
    name: string;
    id: Number;
}

export default function LoginPage() {
    const [search, setSearch] = useState('');
    const [user, setUserData] = useState<User | null>(null);

    const router = useRouter()
    // Here we define our query as a multi-line string
    // Storing it in a separate .graphql/.gql file is also possible
    var query = `
query ($name: String) { 
    User(name: $name) {
        name
        id
        avatar {
          large
          medium
        }
        siteUrl
        updatedAt
      }
}
`;

    // Define our query variables and values that will be used in the query request
    var variables = {
        name: search
    };



    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary headers, like authentication
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(search)
                console.log(result.data.User)
                setUserData(result.data.User);
                // setLoading(false);
            })
            .catch(error => {
                console.error('GraphQL Error:', error);
                // setLoading(false);
            });
    }

    const handleSave = () => {
        localStorage.setItem("user", JSON.stringify(user));
        router.push('/')

    }

    return (
        <main className="p-4 mt-52  my-auto md:p-10 mx-auto max-w-7xl items-center max-w-lg">
            <Card >
                <form onSubmit={(e) => handleSearch(e)}>
                    <Title className="text-center">Log in</Title>
                    <div className="relative mt-5 ">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="rounded-md shadow-sm">
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                aria-hidden="true"
                            >
                                <UserCircleIcon
                                    className="mr-3 h-4 w-4 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Search by name..."
                                spellCheck={false}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="rounded-md h-10 block w-full mt-5 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-green-400">

                        Find
                    </button>
                </form>
            </Card>
            {user ?
                <Card className="mt-5 flex" >

                    <div className="flex-1 flex">
                        <div className="flex-shrink-0 mt-2">
                            <Image
                                className="h-8 w-8 rounded-full"
                                src={user.avatar.medium}
                                height={32}
                                width={32}
                                alt={`${user.name} avatar`}
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.id}
                            </div>
                        </div>
                    </div>
                    <div className="flex-none">
                        <button
                            onClick={() => handleSave()}
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                            save
                        </button>
                    </div>
                </Card>
                : ''
            }
        </main >
    )
}
