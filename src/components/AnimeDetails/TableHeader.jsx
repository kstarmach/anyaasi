import { CheckCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const TableHeader = ({ onSort, sortDirection }) => {
    return (
        <thead>
            <tr className="bg-gray-100 rounded-md">
                {/* <th className="py-2 px-4 text-left">Episode</th> */}
                <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                        <span>Title</span>
                        <button onClick={onSort}  className="ml-2">
                            {sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </div>
                </th>
                <th className="py-2 px-4 text-left"></th>
                <th className="py-2 px-4 text-left">Links</th>
                <th className="py-2 px-4 text-left">
                    <div className="flex items-center">
                        <span>Size</span>
                        <button onClick={onSort} className="ml-2">
                            {sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </div>
                    </th>
                <th className="py-2 px-4 text-left ">
                    <div className="flex items-center">
                        <span>Date</span>
                        <button onClick={onSort} className="ml-2">
                            {sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </div>
                </th>

                <th className="py-2 px-4 text-center">
                    <div className="flex items-center">
                        <ArrowUpCircleIcon className="h-6 w-6" />
                        <button onClick={onSort} className="ml-2">
                            {sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </div>
                </th>

                <th className="py-2 px-4 text-center">
                    <div className="flex items-center">
                        <ArrowDownCircleIcon className="h-6 w-6" />
                        <button onClick={onSort} className="ml-2">
                            {sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </div>
                </th>

                <th className="py-2 px-4 text-center">
                    <div className="flex items-center">
                        <CheckCircleIcon className="h-6 w-6" />
                        <button onClick={onSort} className="ml-2">
                            {sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </div>
                </th>

            </tr>
        </thead>
    )
}

export default TableHeader;