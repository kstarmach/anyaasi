import { Link } from "react-router-dom";

const PageLogo = () => {
    return (
        <Link to="/" className="">
            <img
                src="./Website_Logo.jpg"
                alt="Anime Cover"
                className="rounded-xl object-cover  shadow-2xl mx-auto h-32 w-auto "
            />
        </Link>
    )
}

export default PageLogo;