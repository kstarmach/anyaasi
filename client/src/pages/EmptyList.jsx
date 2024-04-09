const EmptyList = () => {
    return (
        <div className="flex flex-col gap-10 lg:flex-row  items-center justify-center  h-[70dvh]">
            <div className=" flex lg:items-end justify-center ">
                <img
                    src="/NoAnimes.jpg"
                    title="Empty anime list"
                    className="rounded-xl object-cover shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Your watching list is empty</p>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">You can add shows on <a href="https://anilist.co/" target="_blank" rel="noreferrer">Anilist.co</a> or check out the popular page.</p>

            </div>
        </div>
    );
};

export default EmptyList;
