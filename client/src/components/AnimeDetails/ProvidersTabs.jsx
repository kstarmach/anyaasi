import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ChangePageButtons = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className='flex gap-4 items-center'>
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className='bg-white color-black rounded-xl p-2 flex items-center'
            >
                <ChevronLeftIcon className="w-5 h-auto" />
            </button>
            <span>Page {currentPage}/{totalPages}</span>
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='bg-white color-black rounded-xl p-2 flex items-center'
            >
                <ChevronRightIcon className="w-5 h-auto" />
            </button>
        </div>
    )
}

const ProvidersTabs = ({ selectedProvider, setSelectedProvider, currentPage, setCurrentPage, totalPages }) => {
    const providers = ['Erai-raws', 'SubsPlease'];

    return (
        <div className="flex  items-center justify-center">
            <div className='flex-grow'>
                {providers.map(provider => (
                    <button
                        key={provider}
                        className={`font-medium text-base px-4 py-2 rounded-t-xl  ${selectedProvider === provider ? 'bg-white   text-indigo-600' : 'bg-gray-100  text-gray-400'}`}
                        onClick={() => setSelectedProvider(provider)}
                    >
                        {provider}
                    </button>
                ))}
            </div>
            <ChangePageButtons
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default ProvidersTabs;