import { Tab } from '@headlessui/react'
import Pagination from './Pagination';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function ProvidersTabs({ setSelectedProvider, currentPage, setCurrentPage, totalPages }) {
    const providers = ['Erai-raws', 'SubsPlease'];
    return (
        <div className=" px-2  sm:px-0  flex justify-between gap-24">
            <Tab.Group className='flex justify-start'>
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
                    {providers.map(provider => (
                        <Tab
                            onClick={() => setSelectedProvider(provider)}
                            key={provider}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 px-10',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-gray-300 hover:bg-gray-400 hover:text-white'
                                )
                            }
                        >
                            {provider}
                        </Tab>
                    ))}
                </Tab.List>

            </Tab.Group>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    )
}

// import { ChevronLeftButton, ChevronRightButton } from "../ui/Chevrons";

// const ChangePageButtons = ({ currentPage, setCurrentPage, totalPages }) => {
//     return (
//         <div className='flex gap-4 items-center'>
//             <ChevronLeftButton onClickHandler={() => setCurrentPage(currentPage - 1)} />
//             <span>Page {currentPage}/{totalPages}</span>
//             <ChevronRightButton onClickHandler={() => setCurrentPage(currentPage + 1)} />
//         </div>
//     )
// }

// const ProvidersTabs = ({ selectedProvider, setSelectedProvider, currentPage, setCurrentPage, totalPages }) => {
//     const providers = ['Erai-raws', 'SubsPlease'];

//     return (
//         <div className="flex  items-center justify-center">
//             <div className='flex-grow'>
//                 {providers.map(provider => (
//                     <button
//                         key={provider}
//                         className={`font-medium text-base px-4 py-2 rounded-t-xl  ${selectedProvider === provider ? 'bg-white   text-indigo-600' : 'bg-gray-100  text-gray-400'}`}
//                         onClick={() => setSelectedProvider(provider)}
//                     >
//                         {provider}
//                     </button>
//                 ))}
//             </div>
//             <ChangePageButtons
//                 currentPage={currentPage}
//                 setCurrentPage={setCurrentPage}
//                 totalPages={totalPages}
//             />
//         </div>
//     )
// }

export default ProvidersTabs;