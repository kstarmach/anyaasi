const MyAnimeListForm = () => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm">
            <form className="space-y-6" >


                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

const MyAnimeList = () => {
    return (
        <div className="flex-1 px-6 py-12 lg:px-8 mt-40">

            <div className="grow mx-auto h-16 w-auto grow">

                <img
                    className="mx-auto h-16 w-auto "
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png"
                    alt="Your Company"
                />
            </div>

            <MyAnimeListForm />


        </div>
    )
}

export default MyAnimeList;