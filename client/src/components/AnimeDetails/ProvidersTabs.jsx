import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProvidersTabs({ setProvider }) {
    const providers = ['Erai-raws', 'SubsPlease'];
    return (
        <div className=" px-2  sm:px-0 ">
            <Tab.Group className='flex justify-start'>
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
                    {providers.map(provider => (
                        <Tab
                            onClick={() => setProvider(provider)}
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

        </div>
    )
}

export default ProvidersTabs;