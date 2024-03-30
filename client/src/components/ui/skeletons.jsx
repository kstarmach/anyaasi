import { StarIcon } from "@heroicons/react/24/solid";
import { BackButton } from "./Buttons";

export function BadgesSkeleton() {
    return (
        <div className="rounded-xl bg-slate-200 p-3  h-10 w-16" ></div>
    )
}
export function StarSkeleton() {
    return (
        <div className="flex items-center rounded-xl bg-blue-200 p-3  h-12 w-20" >
            <StarIcon className="w-8 h-8 fill-slate-400 ml-2 mr-6 " />
        </div>
    )
}

export function DescriptionSkeleton() {
    return (
        <div
            className={`leading-relaxed animate-pulse bg-white shadow-sm rounded-xl p-8 flex gap-8`}
        >
            <div className={` rounded-xl bg-slate-400 h-96 w-72`} ></div>
            <div className="flex-1 ">
                <div className="flex items-center justify-center">
                    <div className="flex-grow">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-8  bg-slate-300 rounded  mb-4"></div>
                            <div className="h-8  bg-slate-300 rounded  mb-4"></div>
                        </div>
                        <div className="mb-4 flex gap-4">
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
                        className={`rounded-xl h-full w-full object-cover  shadow-2xl bg-slate-300`}
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
