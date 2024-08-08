import { Tab, TabGroup, TabList } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProvidersTabs({ setProvider }) {
    const providers = ['Erai-raws', 'SubsPlease', 'ToonsHub', 'Judas', 'EMBER', 'Anime Time', 'SanKyuu', 'ASW'];
    return (
        <div className=" px-2  sm:px-0 hidden md:block ">
            <TabGroup className=''>
                <TabList className="flex flex-wrap xl:flex-nowrap space-x-1 rounded-xl bg-gray-100 p-1">
                    {providers.map(provider => (
                        <Tab
                            onClick={() => setProvider(provider)}
                            key={provider}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 px-10',
                                    'ring-white/60  focus:outline-none ',
                                    selected
                                        ? 'bg-white text-blue-700 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]'
                                        : 'text-gray-300 hover:bg-gray-400 hover:text-white'
                                )
                            }
                        >
                            {provider}
                        </Tab>
                    ))}
                </TabList>
            </TabGroup>

        </div>
    )
}

export default ProvidersTabs;