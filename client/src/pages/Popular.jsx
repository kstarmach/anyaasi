import { Suspense } from "react";
import Card from "../components/Card";
import { Title } from "../components/ui/Title";
import { PopularSkeleton } from "../components/ui/skeletons";
import { GET_POPULAR_ANIME } from "../queries";
import { useSuspenseQuery } from "@apollo/client";

const Popular = () => {

    return (
        <div className=" flex flex-col gap-4">
            <Title text={'Popular'} />
            <Suspense fallback={<PopularSkeleton />} >
                <PopularData />
            </Suspense>
        </div>
    );
};

const PopularData = () => {
    const { data } = useSuspenseQuery(GET_POPULAR_ANIME, { variables: { perPage: 48 } });

    const entries = data.Page.media;

    return (
        <div className="flex flex-wrap justify-between gap-2">
            {entries.map((entry, idx) => (
                <Card
                    entry={entry}
                    height={450}
                    width={350}
                    coverImage={entry.coverImage.extraLarge}
                    key={idx}
                />
            ))}
        </div>
    )

}


export default Popular;