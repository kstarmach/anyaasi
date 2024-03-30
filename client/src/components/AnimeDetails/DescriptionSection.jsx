import { StarIcon } from "@heroicons/react/24/solid";

const Header = ({ title, genres, seasonYear, averageScore }) => {
    var tensDigit = Math.floor(averageScore / 10); // Get the tens digit
    var onesDigit = averageScore % 10; // Get the ones digit

    return (
        <div className="flex items-center justify-center">
            <div className="flex-grow">
                <h1 className="text-3xl font-semibold mb-4">{title}</h1>
                <div className="mb-4 flex gap-4">
                    {seasonYear && (
                        <span className="inline-flex items-center rounded-xl bg-gray-50 px-3 py-2 font-medium text-base text-gray-400 ">
                            {seasonYear}
                        </span>
                    )}
                    {genres.map((genre, idx) => (
                        <span className="rounded-xl bg-gray-50 p-3 font-medium text-gray-400 " key={idx}>
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex items-center text-white bg-blue-700 rounded-xl p-2'>
                <StarIcon className="w-8 h-8 fill-yellow-400 mx-2" />
                <h3 className="mr-2 text-lg">
                    {tensDigit},{onesDigit}
                </h3>
            </div>
        </div>
    )
}

const DescriptionSection = ({ description, coverImage, title, genres, seasonYear, averageScore }) => {

    return (
        <div className="bg-white shadow-sm rounded-xl p-8 flex gap-8">
            <img src={coverImage} alt={title} className="rounded-xl h-96 w-72" />
            <div className="flex-1">
                <Header
                    title={title}
                    seasonYear={seasonYear}
                    genres={genres}
                    averageScore={averageScore}
                />

                <div dangerouslySetInnerHTML={{ __html: description }} className="mt-4" />
            </div>
        </div>
    )
}

export default DescriptionSection;