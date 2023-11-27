import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchOption = () => {
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };


    return (
        <div className="flex items-center bg-white rounded-xl mr-1 p-2">
       
                <MagnifyingGlassIcon className="h-5 w-5 mx-2 sm:flex sm:items-center relative" />
       

            <div className="ml-2">
                <div className="flex items-center">
                    <input
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={handleInputChange}
                        className="flex-1 rounded-l-md p-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchOption;
