import { ChevronLeftButton, ChevronRightButton } from "../ui/Chevrons";

const ChangePageButtons = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className='flex gap-4 items-center'>
            <ChevronLeftButton onClickHandler={() => setCurrentPage(currentPage - 1)} />
            <span>Page {currentPage}/{totalPages}</span>
            <ChevronRightButton onClickHandler={() => setCurrentPage(currentPage + 1)} />
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