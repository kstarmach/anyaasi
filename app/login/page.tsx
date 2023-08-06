'use client';

import { Card, Title } from "@tremor/react"
import { UserCircleIcon } from "@heroicons/react/24/solid"

export default function LoginPage() {
    return (
        <main className="p-4 mt-52  my-auto md:p-10 mx-auto max-w-7xl items-center max-w-lg">
            <Card >
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
                        // onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                </div>
                <button className="rounded-md h-10 block w-full mt-5 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-green-400" >
                    Find
                </button>

            </Card>



        </main>
    )
}
