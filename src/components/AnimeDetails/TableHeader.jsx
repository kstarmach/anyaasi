import { ArrowsUpDownIcon, ArrowSmallDownIcon, ArrowSmallUpIcon } from '@heroicons/react/24/solid'

const TableHeader = ({ columns, sortDirections, onSort }) => {
    return (
        <thead>
            <tr className="bg-gray-100 rounded-md">
                {columns.map((column, idx) => (
                    <th
                        key={column.key}
                        className={"py-2 px-4 text-center " + (column.sortable ? "cursor-pointer" : "")}
                        onClick={column.sortable ? () => onSort(column.key) : null}
                    >
                        <div className="flex items-center">
                            <span>{column.label}</span>
                            <div className='ml-auto'>
                                {
                                    column.sortable && (
                                        sortDirections[column.key] ? (
                                            <span id={idx}>
                                                {sortDirections[column.key] === 'asc' ? <ArrowSmallUpIcon className="h-4 w-4" /> : <ArrowSmallDownIcon className="h-4 w-4" />}
                                            </span>
                                        ) : (
                                            <ArrowsUpDownIcon className="h-4 w-4" />
                                        )
                                    )
                                }


                            </div>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}


export default TableHeader;

