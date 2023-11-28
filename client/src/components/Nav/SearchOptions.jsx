    import React, { useState, useEffect } from 'react';
    import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
    import AsyncSelect from 'react-select/async';
    import { SEARCH_ANIME } from '../../queries';
    import { useQuery } from '@apollo/client';

    function debounce(fn, delay) {
        let timer;

        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    }


    const SearchOption = () => {

        const [searchTerm, setSearchTerm] = useState('');
        const [isLoading, setIsLoading] = useState(false);
        const [newData, setNewData] = useState([]);

        const { loading, error, data } = useQuery(SEARCH_ANIME, {
            variables: { q: searchTerm },
            skip: searchTerm.length <= 2,
        });



        useEffect(() => {
            if (loading) {
                setIsLoading(true);
            } else {
                setIsLoading(false);
            }

            if (data) {
                setNewData(data.Page.media);
            }
        }, [loading, data])

        const handleLoadOptions = async (inputValue) => {


            if (newData.length > 0) {
                return newData.map((option) => ({
                    label: option.title.userPreferred,
                    value: option.id,
                    coverImage: option.coverImage.large,
                    icon: option.coverImage.large,
                }));
            }

            return [];
        };




        return (
            <div className="flex items-center bg-white rounded-xl mr-1 py-2 px-4 mx-auto">
                <MagnifyingGlassIcon className="h-5 w-5 mx-2 sm:flex sm:items-center relative" />

                <div className="w-48 mx-auto justify-content-center ">
                    <AsyncSelect
                        loadOptions={handleLoadOptions}
                        inputValue={searchTerm}
                        onInputChange={(inputValue) => setSearchTerm(inputValue)}
                        placeholder="Search"
                        isClearable={true}
                        isLoading={isLoading}
                        getOptionLabel={(option) => (
                            <a href={`/anime/${option.value}`} className="flex items-center">
                                <img src={option.coverImage} alt={option.label} className="h-8 w-8 mr-2 rounded-full" />
                                {option.label}
                            </a>
                        )}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderWidth: state.isFocused ? '0' : '0',
                            }),
                        }}
                    />
                </div>
            </div>
        );
    };

    export default SearchOption;
