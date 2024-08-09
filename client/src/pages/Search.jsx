import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_ANIME } from "../queries";
import Card from "../components/Card";
import { BackButton } from "../components/ui/Buttons";

const SearchResult = ({ result }) => {
    if (result.length > 0) {

        return (
            <div className="flex flex-wrap justify-between gap-2">
                {
                    result.map((entry, idx) => (
                        <Card
                            entry={entry}
                            height={450}
                            width={350}
                            coverImage={entry.coverImage.extraLarge}
                            key={idx}
                        />
                    ))
                }
            </div>
        )
    }
    return "Not found";
}

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
    const [searchValue, setSearchValue] = useState("");
    const [search, { loading, data }] = useLazyQuery(SEARCH_ANIME);

    useEffect(() => {
        // Load data based on initial search query when component mounts
        setSearchQuery(searchParams.get("q") || "");
        setSearchValue(searchQuery);
        if (searchQuery !== "") {
            search({ variables: { q: searchQuery } });
        }
    }, [searchQuery, searchParams, search]); // Only trigger when searchQuery changes

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams({ q: searchValue });
        search({ variables: { q: searchValue } });
    };

    return (
        <div className="flex flex-col gap-10">
            <BackButton />
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center mb-10">
                    <div className="flex items-center bg-white rounded-full p-3 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] dark:bg-indigo-300 ">
                        <MagnifyingGlassIcon className="h-8 w-auto mx-2  text-slate-400 dark:text-slate-200" />
                        <input
                            type='text'
                            placeholder='Search...'
                            className='!outline-none text-3xl mx-2 dark:bg-indigo-300 dark:text-slate-100  dark:placeholder:text-slate-200'
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </div>
                </div>
            </form>

            {loading ? (
                // Render loading indicator while data is being fetched
                <div>Loading...</div>
            ) : (
                // Render search results if data is available
                data && data.Page.media.length > 0 ? (
                    <SearchResult result={data.Page.media} />
                ) : (
                    // Render not found message if no results are found
                    <div>No results found.</div>
                )
            )}
        </div>
    );
};

export default Search;
