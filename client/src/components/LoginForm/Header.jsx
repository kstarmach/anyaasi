const Header = () => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex">
                <div className="grow">
                    <img
                        className="mx-auto h-16 w-auto grow"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/512px-AniList_logo.svg.png"
                        alt="Your Company"
                    />
                </div>
                <div className="grow-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-auto h-16 stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>

                </div>
                <div className="grow mx-auto h-16 w-auto grow">

                    <img
                        className="mx-auto h-16 w-auto "
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
                        alt="Your Company"
                    />
                </div>
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Select your account
            </h2>
        </div>
    )
}

export default Header;