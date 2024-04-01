import TableBody from './TableBody';

import { CheckCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'


const Table = ({ title, provider }) => {
    return (
        <div className=" min-w-full align-middle rounded-xl">
            <div className="rounded-xl bg-gray-100  md:pt-0">

                <table className="hidden min-w-full text-gray-900 md:table">
                    <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Title
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium text-center">
                                Links
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Size
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Date
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                <ArrowUpCircleIcon className="h-5 w-5 " />
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                <ArrowDownCircleIcon className="h-5 w-5 " />
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                <CheckCircleIcon className="h-5 w-5 " />
                            </th>
                        </tr>
                    </thead>
                    {title !== null ?
                        <TableBody title={title} provider={provider} />
                        : ''}
                </table>
            </div>
        </div>
    )
}

export default Table;