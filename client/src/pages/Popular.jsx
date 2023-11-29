import Card from "../components/Card";
import { GET_POPULAR_ANIME } from "../queries";
import { useQuery } from "@apollo/client";
const Popular = () => {
    const { loading, error, data } = useQuery(GET_POPULAR_ANIME, {
        variables: { season: "FALL", seasonYear: 2023 },
    });

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    const entries = data.Page.media;

    return (
        <div className="mx-20">
            <p className='text-2xl font-semibold  flex-grow mb-10'>Popular</p>
            <div className="grid grid-cols-5 gap-4">

                {entries.map((entry, idx) => (
                    <Card
                        entry={entry}
                        height={550}
                        width={450}
                        coverImage={entry.coverImage.extraLarge}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
};


export default Popular;