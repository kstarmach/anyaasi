import { CheckCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const TableHeader = () => {
    return (
        <thead>
            <tr className="bg-gray-100 rounded-md">
                {/* <th className="py-2 px-4 text-left">Episode</th> */}
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left"></th>
                <th className="py-2 px-4 text-left">Links</th>
                <th className="py-2 px-4 text-left">Size</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-center"><ArrowUpCircleIcon className="h-6 w-6" /></th>
                <th className="py-2 px-4 text-center"><ArrowDownCircleIcon className="h-6 w-6" /></th>
                <th className="py-2 px-4 text-center"><CheckCircleIcon className="h-6 w-6" /></th>
            </tr>
        </thead>
    )
}

export default TableHeader;