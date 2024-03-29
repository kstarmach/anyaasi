import Card from "../components/Card";
import { Title } from "../components/ui/Title";
import { GET_POPULAR_ANIME } from "../queries";
import { useQuery } from "@apollo/client";
const Popular = () => {
    const { loading, error, data } = useQuery(GET_POPULAR_ANIME, { variables: { perPage: 48 } });

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    const entries = data.Page.media;

    return (
        <div className=" flex flex-col gap-4">
            <Title text={'Popular'} />
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