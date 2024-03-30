import { ArrowUpCircleIcon, ArrowDownCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

// const TableHeader = ({ columns, sortDirections, onSort }) => {
//     return (
//         <thead>
//             <tr className="bg-gray-100 rounded-md">
//                 {columns.map((column, idx) => (
//                     <th
//                         key={column.key}
//                         className={"py-2 px-4 text-center " + (column.sortable ? "cursor-pointer" : "")}
//                         onClick={column.sortable ? () => onSort(column.key) : null}
//                     >
//                         <div className="flex items-center">
//                             {column.label}
//                             <div>
//                                 {
//                                     column.sortable && (
//                                         sortDirections[column.key] ? (
//                                             <span id={idx}>
//                                                 {sortDirections[column.key] === 'asc' ? <ArrowSmallUpIcon className="h-4 w-4" /> : <ArrowSmallDownIcon className="h-4 w-4" />}
//                                             </span>
//                                         ) : (
//                                             <ArrowsUpDownIcon className="h-4 w-4" />
//                                         )
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     </th>
//                 ))}
//             </tr>
//         </thead>
//     )
// }
const TableHeader = () => {
    return (
        <thead className="rounded-lg text-left text-sm font-normal bg-gray-100">
            <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
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
                <th scope="col" className="px-3 py-5 font-medium ">
                    <CheckCircleIcon className="h-5 w-5 " />
                </th>
            </tr>
        </thead>
    )
}


export default TableHeader;

