const StatisticsSection = ({ coverImage, title, episodes, nextAiringEpisode, averageScore, popularity }) => {
    return (
        <>
            <div className="mb-4">
                <img src={coverImage} alt={title} className="rounded-md shadow-md" />
            </div>
            <div className="bg-white shadow-sm rounded-md p-6 mb-4">
                <p className="text-gray-600 mb-2">Episodes: {episodes}</p>
                {nextAiringEpisode && (
                    <p className="text-gray-600 mb-2">Next Airing Episode: {nextAiringEpisode.episode}</p>
                )}
                <p className="text-gray-600 mb-2">Average Score: {averageScore}</p>
                <p className="text-gray-600 mb-2">Popularity: {popularity}</p>
            </div>
        </>
    )
}

export default StatisticsSection;