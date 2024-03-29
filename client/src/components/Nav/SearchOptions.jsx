import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
// import { useQuery } from '@apollo/client';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AsyncSelect from 'react-select/async';
// import { SEARCH_ANIME } from '../../queries';

const SearchOption = () => {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const [newData, setNewData] = useState([]);

    // const { loading, data } = useQuery(SEARCH_ANIME, {
    //     variables: { q: searchTerm },
    //     skip: searchTerm.length <= 2,
    // });



    // useEffect(() => {
    //     if (loading) {
    //         setIsLoading(true);
    //     } else {
    //         setIsLoading(false);
    //     }

    //     if (data) {
    //         setNewData(data.Page.media);
    //     }
    // }, [loading, data])

    // const handleLoadOptions = async () => {


    //     if (newData.length > 0) {
    //         return newData.map((option) => ({
    //             label: option.title.userPreferred,
    //             value: option.id,
    //             coverImage: option.coverImage.large,
    //             icon: option.coverImage.large,
    //         }));
    //     }

    //     return [];
    // };




    return (
        <div className="flex items-center bg-white rounded-full p-3">
            <MagnifyingGlassIcon className="h-5 w-auto mx-2  text-slate-400" />
            <input
                type='text'
                placeholder='Search...'
                className='!outline-none w-40'
            />
            {/* 
            <div className="w-48 mx-auto justify-content-center ">
                <AsyncSelect
                    loadOptions={handleLoadOptions}
                    inputValue={searchTerm}
                    onInputChange={(inputValue) => setSearchTerm(inputValue)}
                    placeholder="Search"
                    isClearable={true}
                    isLoading={isLoading}
                    getOptionLabel={(option) => (
                        <Link to={`/anime/${option.value}`} className="flex items-center">
                            <img src={option.coverImage} alt={option.label} className="h-8 w-8 mr-2 rounded-full" />
                            {option.label}
                        </Link>
                    )}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderWidth: state.isFocused ? '0' : '0',
                        }),
                    }}
                />
            </div> */}
        </div>
    );
};

export default SearchOption;
