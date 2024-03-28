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
        </div>
    );
};


export default Popular;