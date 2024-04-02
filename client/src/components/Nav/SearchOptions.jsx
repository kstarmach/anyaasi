import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchOption = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams({ q: searchQuery });
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-white rounded-full p-3 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]">
                <MagnifyingGlassIcon className="h-5 w-auto mx-2 text-slate-400" />
                <input
                    type='text'
                    placeholder='Search...'
                    className='!outline-none w-40'
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchOption;
