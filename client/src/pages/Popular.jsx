import Card from "../components/Card";
import { GET_POPULAR_ANIME } from "../queries";
import { useQuery } from "@apollo/client";
const Popular = () => {
    const { loading, error, data } = useQuery(GET_POPULAR_ANIME);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    const entries = data.Page.media;

    return (
        <div className="mx-20">
            <p className='text-2xl font-semibold  flex-grow mb-10'>Popular</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2000px]:grid-cols-6  min-[2300px]:grid-cols-7 justify-center gap-4">

                {entries.map((entry, idx) => (
                    <Card
                        entry={entry}
                        height={400}
                        width={300}
                        coverImage={entry.coverImage.extraLarge}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
};


export default Popular;