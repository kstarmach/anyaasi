
const DescriptionSection = ({ title, description, bannerImage }) => {
    return (
        <>
            <div className="bg-white shadow-sm rounded-md p-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            {
                bannerImage && (
                    <img src={bannerImage} alt={title} className="rounded-md shadow-md mb-4" />
                )
            }
        </>
    )
}

export default DescriptionSection;