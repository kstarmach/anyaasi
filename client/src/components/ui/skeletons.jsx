import { ArrowUpCircleIcon, StarIcon, ArrowDownCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { BackButton } from "./Buttons";
import { Title } from "./Title";
import { ChevronLeftButton, ChevronRightButton } from "./Chevrons";

export function BadgesSkeleton() {
    return (
        <div className="rounded-xl bg-slate-200 p-3  h-10 w-16" ></div>
    )
}
export function StarSkeleton() {
    return (
        <div className="flex items-center rounded-full bg-blue-200 p-3  h-12 w-20" >
            <StarIcon className="w-8 h-8 fill-slate-400 ml-2 mr-6 " />
        </div>
    )
}

export function DescriptionSkeleton() {
    return (
        <div
            className={`leading-relaxed animate-pulse bg-white shadow-sm rounded-xl p-8 flex flex-wrap gap-8`}
        >
            <div className={` rounded-xl bg-slate-400 h-96 w-72`} ></div>
            <div className="flex-1 ">
                <div className="flex items-center justify-center">
                    <div className="flex-grow">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-8  bg-slate-300 rounded  mb-4"></div>
                            <div className="h-8  bg-slate-300 rounded  mb-4"></div>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-4">
                            <BadgesSkeleton />
                            <BadgesSkeleton />
                            <BadgesSkeleton />
                        </div>
                    </div>
                    <StarSkeleton />
                </div>

                <div className="space-y-3 mt-4">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    );
}


export function AnimeDetailsSkeleton() {
    return (
        <div className="flex flex-col gap-8">
            <BackButton />
            <DescriptionSkeleton />
        </div>
    )
}

export function CardSkeleton({ height, width }) {
    return (
        <div className={`leading-relaxed animate-pulse mb-16`} >
            <div
                className="relative"
                style={{ height, width }}
            >
                <div className="h-full w-auto">
                    <div
                        alt="Anime Cover"
                        className={`rounded-xl h-full w-full object-cover  shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] bg-slate-300`}
                    />
                </div>
            </div>
        </div>
    )
}

export function PopularSkeleton() {
    return (
        <div className={` flex flex-wrap justify-between gap-2`}>
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
            <CardSkeleton
                height={450}
                width={350}
            />
        </div>
    )
}

export function WatchingSkeleton() {
    return (
        <div className="carousel flex flex-col gap-6 ">
            <div className='flex justify-between '>
                <Title text={"Watching"} />
                <div className='flex gap-4 items-center'>
                    <ChevronLeftButton />

                    <ChevronRightButton />
                </div>
            </div>

            {/* Image container */}
            <div className="images-container relative flex gap-4 overflow-hidden">
                <CardSkeleton
                    height={400}
                    width={300}
                />
                <CardSkeleton
                    height={400}
                    width={300}
                />
                <CardSkeleton
                    height={400}
                    width={300}
                />
            </div>

        </div>
    )
}
export function RecentSkeleton() {
    return (
        <div className="carousel flex flex-col gap-6 ">
            <div className='flex justify-between '>
                <Title text={"Recently Added"} />
                <div className='flex gap-4 items-center'>
                    <ChevronLeftButton />

                    <ChevronRightButton />
                </div>
            </div>

            {/* Image container */}
            <div className="images-container relative flex gap-4 overflow-hidden">
                <CardSkeleton
                    height={300}
                    width={500}
                />
                <CardSkeleton
                    height={300}
                    width={500}
                />
                <CardSkeleton
                    height={300}
                    width={500}
                />
            </div>

        </div>
    )
}


export function TableRowSkeleton() {
    return (
        <tr className="leading-relaxed animate-pulse w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            {/* Customer Name and Image */}
            <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                </div>
            </td>
            {/* Actions */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-center gap-3">
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                </div>
            </td>
            {/* Amount */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Date */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Stats */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
        </tr>
    );
}

export function TableBodySkeleton() {
    return (
        <tbody className="bg-white">
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
        </tbody>
    );
}



export function TableSkeleton() {
    return (

        <div className=" min-w-full align-middle">
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
                            <th scope="col" className="px-3 py-5 font-medium ">
                                <CheckCircleIcon className="h-5 w-5 " />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <TableRowSkeleton />
                        <TableRowSkeleton />
                        <TableRowSkeleton />
                        <TableRowSkeleton />
                        <TableRowSkeleton />
                        <TableRowSkeleton />
                    </tbody>
                </table>
            </div>
        </div>
    );
}