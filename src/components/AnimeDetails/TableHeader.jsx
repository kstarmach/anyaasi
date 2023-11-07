import { CheckCircleIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const TableHeader = ({ columns, onSort, sortDirection }) => {
    return (
        <thead>
            <tr className="bg-gray-100 rounded-md ">
                {columns.map((column,idx) => (
                    <th key={column.key} className="py-2 px-4 text-left">
                        <div className="flex items-center">
                            <span>{column.label}</span>
                            {column.sortable && (
                                <button onClick={() => onSort(column.key)} className='ml-2' id={idx}>
                                    {sortDirection === 'asc' ? '▲' : '▼'}
                                </button>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader;

